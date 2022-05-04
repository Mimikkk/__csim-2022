import { Gender } from "@/components/Fhir/models/base";
import { Patient } from "@/components/Fhir/models";
import { Nullable } from "@/shared/types";
import { createApiUrl } from "@/shared/services";
import { parseResponse } from "@/shared/utils";
import axios from "axios";

interface SearchParams {
  name?: string;
  limit?: number;
  gender?: Gender;
}

interface Service {
  read: (id: string) => Promise<Nullable<Patient>>;
  search: (params: SearchParams) => Promise<Patient[]>;
}

const ApiUrl = createApiUrl("fhir/patients");

export const patientService: Service = {
  read: (id) =>
    axios.get(`${ApiUrl}/read`, { params: { id } }).then(parseResponse),

  search: (params) =>
    axios.get(`${ApiUrl}/search`, { params }).then(parseResponse),
};
