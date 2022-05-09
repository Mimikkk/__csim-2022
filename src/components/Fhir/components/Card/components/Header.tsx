import { useData } from "solid-app-router";
import { ReadResponse } from "@/components/Fhir/services";
import { Patient } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";

const { birthdate, gender, identifierTitle, fullname } = Patient.Row;
export const CardHeader = () => {
  const [data] = useData<Tracked<ReadResponse>>();
  const { patient } = data();

  return (
    <header class="w-full bg-rose-900 gap-2 items-center opacity-60">
      <span class="w-full capitalize animated">{fullname(patient)}</span>
      <span>/</span>
      <span class="w-full capitalize animated">{gender(patient)}</span>
      <span>/</span>
      <span class="w-full capitalize animated">{birthdate(patient)}</span>
      <span>/</span>
      <span
        class="w-full capitalize animated ellipsis"
        title={identifierTitle(patient)}>
        {identifierTitle(patient)}
      </span>
    </header>
  );
};
