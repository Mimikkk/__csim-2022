import { fetchImageDataFromSource } from "@/shared/utils";
import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography";

export interface TomographyRequest {
  encodedImage: string;
  detectors: number;
  scans: number;
  angle: number;
  useFilter: boolean;
}

export interface TomographyResponse {
  encoded_reconstruction: string;
  encoded_sinogram: string;
  rmse: number;
}

export interface TomographyParsedResponse {
  rmse: number;
  sinogram: ImageData;
  reconstruction: ImageData;
}

export const parseResponse = async ({
  encoded_reconstruction,
  encoded_sinogram,
  rmse,
}: TomographyResponse): Promise<TomographyParsedResponse> => ({
  rmse,
  sinogram: await fetchImageDataFromSource(encoded_sinogram),
  reconstruction: await fetchImageDataFromSource(encoded_reconstruction),
});

export const tomographyService = {
  process: ({ encodedImage, useFilter, ...other }: TomographyRequest) =>
    axios
      .post<TomographyRequest, TomographyResponse>(`${ApiUrl}/process`, {
        encoded_image: encodedImage,
        use_filter: useFilter,
        ...other,
      })
      .then(parseResponse),
};
