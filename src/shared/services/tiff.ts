import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";
import { createApiUrl } from "./createProxy";

const ApiUrl = createApiUrl("tiff");

export const tiffService = {
  convert: (item: File | Blob) => {
    const form = new FormData();
    form.append("file", item);

    return axios
      .post<FormData, DataResponse<string>>(`${ApiUrl}/convert`, form)
      .then(parseResponse);
  },
};
