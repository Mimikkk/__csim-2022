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
  encoded_image: string;
  rmse: number;
}

export interface TomographyParsedResponse {
  rmse: number;
  imagedata: ImageData;
}

export const parseResponse = async ({
  encoded_image,
  rmse,
}: TomographyResponse): Promise<TomographyParsedResponse> => ({
  rmse,
  imagedata: await fetchImageDataFromSource(encoded_image),
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
