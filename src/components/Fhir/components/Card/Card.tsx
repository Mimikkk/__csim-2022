import { useData, useParams } from "solid-app-router";
import { createEffect } from "solid-js";
import { patientService } from "@/components/Fhir/services";
export const PatientCard = () => {
  const { id } = useParams();

  createEffect(async () => {
    await patientService.read(id);
  });

  return <div>{id}</div>;
};
