import { createContext } from "@/shared/utils";
import { createEffect, createSignal, on } from "solid-js";
import { Nullable } from "@/shared/types";
import { Gender } from "@/components/Fhir/models/base";
import { createTracked } from "@/shared/hooks";
import { patientService } from "@/components/Fhir/services";

export const [useFhir, FhirProvider] = createContext("Fhir", () => {
  const [patientName, setPatientName] = createSignal<Nullable<string>>(null);
  const [gender, setGender] = createSignal<Nullable<Gender>>(null);
  const [limit, setLimit] = createSignal<Nullable<number>>(null);

  const [patients, patientsStatus, fetchPatients] = createTracked({
    fn: () =>
      patientService.search({
        name: patientName(),
        gender: gender(),
        limit: limit(),
      }),
  });

  createEffect(
    on([patientName, gender, limit], fetchPatients, { defer: true })
  );

  return {
    patientName,
    gender,
    limit,
    patients,
    setPatientName,
    setGender,
    setLimit,
    patientsStatus,
    fetchPatients,
  } as const;
});
