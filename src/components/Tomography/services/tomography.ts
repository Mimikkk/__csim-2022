import axios from "axios";

const ApiUrl = "http://localhost:3001/api/tomography/image";

export interface Request {
  original: string;
  detectors: number;
  scans: number;
  spread: number;
  filter: boolean;
}

interface Response {
  data: {
    reconstruction_png: string;
    sinogram_png: string;
    reconstruction_gif: string;
    sinogram_gif: string;
    rmse: number;
  };
}

interface ParsedResponse {
  sinogram: string;
  reconstruction: {
    image: string;
    animation: string;
    rmse: number;
  };
}

const parseResponse = ({
  data: { reconstruction_png, sinogram_png, reconstruction_gif, rmse },
}: Response): ParsedResponse => ({
  sinogram: sinogram_png,
  reconstruction: {
    image: reconstruction_png,
    animation: reconstruction_gif,
    rmse: rmse,
  },
});

export const tomographyService = {
  process: (data: Request) =>
    axios
      .post<Request, Response>(`${ApiUrl}/process`, data)
      .then(parseResponse),
};
