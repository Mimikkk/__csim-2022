import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";
import { Patient } from "@/components/Tomography/models";

const ApiUrl = "http://localhost:3001/api/tomography/dicom";

interface Load {
  image: string;
  patient: Patient;
}

export const dicomService = {
  save: (item) =>
    axios
      .post<FormData, DataResponse<Blob>>(`${ApiUrl}/save`, item, {
        responseType: "blob",
      })
      .then(parseResponse),

  read: (item: File | Blob) => {
    const form = new FormData();
    form.append("file", item);

    return axios
      .post<FormData, DataResponse<Load>>(`${ApiUrl}/read`, form)
      .then(parseResponse);
  },
};
