import { Gender } from "@/components/Fhir/models/base";
import {
  MedicationStatement,
  Observation,
  Patient,
} from "@/components/Fhir/models";
import { Media, Nullable } from "@/shared/types";
import { createApiUrl } from "@/shared/services";
import { parseResponse } from "@/shared/utils";
import axios from "axios";

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
  uploadPhoto: (id: string, file: File) => Promise<void>;
  changeStatus: (id: string, status: string) => Promise<void>;
}

const ApiUrl = createApiUrl("fhir/patients");

export const patientService: Service = {
  read: async (id) =>
    axios.get(`${ApiUrl}/read`, { params: { id } }).then(parseResponse),

  search: (params) =>
    axios.get(`${ApiUrl}/search`, { params }).then(parseResponse),

  uploadPhoto: async (id, file) =>
    axios.patch(
      `http://hapi.fhir.org/baseR4/Patient/${id}`,
      createUpdatePhotoBody(...splitMedia(await readfile(file))),
      { headers: { "Content-Type": "application/fhir+json" } }
    ),

  changeStatus: async (id, status) =>
    axios.patch(
      `http://hapi.fhir.org/baseR4/MedicationStatement/${id}`,
      createUpdateStatusBody(status),
      { headers: { "Content-Type": "application/fhir+json" } }
    ),
};

export const readfile = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

export const createUpdatePhotoBody = (contentType: string, data: string) => ({
  resourceType: "Parameters",
  parameter: [
    {
      name: "operation",
      part: [
        {
          name: "type",
          valueString: "add",
        },
        {
          name: "path",
          valueString: "Patient",
        },
        {
          name: "name",
          valueString: "photo",
        },
        {
          name: "value",
          valueAttachment: {
            contentType,
            data,
            title: "image.png",
          },
        },
      ],
    },
  ],
});
export const createUpdateStatusBody = (status: string) => ({
  resourceType: "Parameters",
  parameter: [
    {
      name: "operation",
      part: [
        {
          name: "type",
          valueString: "add",
        },
        {
          name: "path",
          valueString: "MedicationStatement",
        },
        {
          name: "name",
          valueString: "status",
        },
        {
          name: "value",
          valueString: status,
        },
      ],
    },
  ],
});

export const splitMedia = (s: Media) => {
  const [type, data] = s.split(",");

  return [type.replace("data:", ""), data] as const;
};
