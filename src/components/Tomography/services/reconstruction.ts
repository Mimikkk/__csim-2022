import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography/reconstruction";

export const reconstructionService = {
  recreate: (sinogram) => axios.post<FormData>(`${ApiUrl}/create`, sinogram),
};
