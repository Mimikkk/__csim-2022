import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography/dicom";

export const dicomService = {
  save: (item) => axios.post<FormData>(`${ApiUrl}/save`, item),
  load: (item) => axios.post<FormData>(`${ApiUrl}/load`, item),
};
