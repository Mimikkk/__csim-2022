import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography/sinogram";

export const sinogramService = {
  create: (item) => axios.post<FormData>(`${ApiUrl}/create`, item),
};
