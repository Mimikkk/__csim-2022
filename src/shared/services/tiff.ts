import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = "http://localhost:3001/api/tiff";

export const tiffService = {
  convert: (item: File | Blob) => {
    const form = new FormData();
    console.log({ item });
    form.append("file", item);

    return axios
      .post<FormData, DataResponse<string>>(`${ApiUrl}/convert`, form)
      .then(parseResponse);
  },
};
