import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = "http://localhost:3001/api/tomography/reconstruction";

interface Request {
  original: string;
  sinogram: string;
  scans: number;
  spread: number;
  detectors: number;
}

interface Response {
  animation: string;
  image: string;
  rmse: number;
}

export const reconstructionService = {
  reconstruct: (sinogram) =>
    axios
      .post<Request, DataResponse<Response>>(`${ApiUrl}/reconstruct`, sinogram)
      .then(parseResponse),
};
