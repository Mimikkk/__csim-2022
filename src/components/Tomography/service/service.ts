import { fetchImageDataFromSource } from "@/shared/utils";
import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography";

export interface TomographyRequest {
  encodedImage: string;
  detectors: number;
  scans: number;
  spread: number;
  useFilter: boolean;
}

export interface TomographyResponse {
  data: {
    encoded_reconstruction_png: string;
    encoded_sinogram_png: string;
    encoded_reconstruction_gif: string;
    encoded_sinogram_gif: string;
    rmses: number[];
    rmse: number;
  };
}

export interface TomographyParsedResponse {
  rmse: number;
  rmses: number[];
  sinogram: ImageData;
  reconstruction: ImageData;
  sinogram_animation: string;
  reconstruction_animation: string;
}

export const parseResponse = async ({
  data: {
    encoded_reconstruction_png,
    encoded_sinogram_png,
    encoded_reconstruction_gif,
    encoded_sinogram_gif,
    rmses,
    rmse,
  },
}: TomographyResponse): Promise<TomographyParsedResponse> => {
  return {
    rmse,
    rmses,
    sinogram: await fetchImageDataFromSource(encoded_sinogram_png),
    reconstruction: await fetchImageDataFromSource(encoded_reconstruction_png),
    sinogram_animation: encoded_sinogram_gif,
    reconstruction_animation: encoded_reconstruction_gif,
  };
};

export const tomographyService = {
  process: ({
    encodedImage,
    useFilter,
    ...other
  }: TomographyRequest): Promise<TomographyParsedResponse> =>
    axios
      .post<TomographyRequest, TomographyResponse>(`${ApiUrl}/process`, {
        encoded_image: encodedImage,
        use_filter: useFilter,
        ...other,
      })
      .then(parseResponse),
};
