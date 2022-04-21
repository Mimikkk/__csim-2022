import { createApiUrl } from "@/shared/services";
import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = createApiUrl("eyes/tree");

export const treeService = {
  process: (image: string) =>
    axios
      .post<string, DataResponse<string>>(`${ApiUrl}/process`, { image })
      .then(parseResponse),
};
