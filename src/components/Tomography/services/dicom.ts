import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";
import { Patient } from "@/components/Tomography/models";

const ApiUrl = "http://localhost:3001/api/tomography/dicom";

interface SaveRequest {
  image: string;
  patient: Patient;
}

interface LoadResponse {
  image: string;
  patient: Patient;
}

export const dicomService = {
  save: (item: SaveRequest) =>
    axios
      .post<SaveRequest, DataResponse<Blob>>(`${ApiUrl}/save`, item, {
        responseType: "blob",
      })
      .then(parseResponse),

  read: (item: File | Blob) => {
    const form = new FormData();
    form.append("file", item);

    return axios
      .post<FormData, DataResponse<LoadResponse>>(`${ApiUrl}/read`, form)
      .then(parseResponse);
  },
};
