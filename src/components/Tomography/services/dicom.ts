import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = "http://localhost:3001/api/tomography/dicom";

export interface Patient {
  id: string;
  name: string;
  comments: string;
}

interface Load {
  image: string;
  patient: Patient;
}

export const dicomService = {
  save: (item) => axios.post<FormData>(`${ApiUrl}/save`, item),
  load: (item: File | Blob) => {
    const form = new FormData();
    form.append("file", item);

    return axios
      .post<FormData, DataResponse<Load>>(`${ApiUrl}/load`, form)
      .then(parseResponse);
  },
};
