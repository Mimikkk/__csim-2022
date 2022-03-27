import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = "http://localhost:3001/api/tomography/sinogram";

interface CreateRequest {
  original: string;
  spread: number;
  detectors: number;
  scans: number;
}

export const sinogramService = {
  create: (item) =>
    axios
      .post<CreateRequest, DataResponse<string>>(`${ApiUrl}/create`, item)
      .then(parseResponse),
};
