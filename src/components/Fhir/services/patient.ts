import { Gender } from "@/components/Fhir/models/base";
import {
  MedicationStatement,
  Observation,
  Patient,
} from "@/components/Fhir/models";
import { Nullable } from "@/shared/types";
import { createApiUrl } from "@/shared/services";
import { parseResponse } from "@/shared/utils";
import axios from "axios";
import { mockPatientRead as chonky } from "@/mocks/patient-read-alot-of-observations";
import { mockPatientRead as both } from "@/mocks/patient-read-both";

interface SearchParams {
  name?: string;
  limit?: number;
  gender?: Gender;
}

export interface ReadResponse {
  patient: Patient;
  observations: Observation[];
  medicationStatements: MedicationStatement[];
}

interface Service {
  read: (id: string) => Promise<Nullable<ReadResponse>>;
  search: (params: SearchParams) => Promise<Patient[]>;
}

const ApiUrl = createApiUrl("fhir/patients");

export const patientService: Service = {
  read: async (id) => {
    if (id === "chonky") return chonky;
    if (id === "both") return both;
    return axios.get(`${ApiUrl}/read`, { params: { id } }).then(parseResponse);
  },

  search: (params) =>
    axios.get(`${ApiUrl}/search`, { params }).then(parseResponse),
};
