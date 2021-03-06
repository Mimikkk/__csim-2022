import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";
import { createApiUrl } from "@/shared/services";

const ApiUrl = createApiUrl("tomography/sinogram");

interface CreateRequest {
  original: string;
  spread: number;
  detectors: number;
  scans: number;
}

interface FilterRequest {
  original: string;
}

export const sinogramService = {
  create: (item: CreateRequest) =>
    axios
      .post<CreateRequest, DataResponse<string>>(`${ApiUrl}/create`, item)
      .then(parseResponse),
  filter: (item: string) =>
    axios
      .post<FilterRequest, DataResponse<string>>(`${ApiUrl}/filter`, {
        original: item,
      })
      .then(parseResponse),
};
