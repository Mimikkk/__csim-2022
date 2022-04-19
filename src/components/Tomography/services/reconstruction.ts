import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";
import { createApiUrl } from "@/shared/services";

const ApiUrl = createApiUrl("tomography/reconstruction");

interface Request {
  original: string;
  sinogram: string;
  scans: number;
  spread: number;
  detectors: number;
  use_filter: boolean;
}

interface Response {
  animation: string;
  image: string;
  rmse: number;
}

export const reconstructionService = {
  reconstruct: (item: Request) =>
    axios
      .post<Request, DataResponse<Response>>(`${ApiUrl}/reconstruct`, item)
      .then(parseResponse),
};
