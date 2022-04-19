import { createApiUrl } from "@/shared/services";
import axios from "axios";
import { DataResponse } from "@/shared/utils";

const ApiUrl = createApiUrl("eyes/cnn");

export const cnnService = {
  process: (image: string) =>
    axios.post<string, DataResponse<string>>(`${ApiUrl}/process`, image),
};
