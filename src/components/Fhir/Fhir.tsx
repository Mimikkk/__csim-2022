import { OutlineBox, Textfield } from "@/shared/components";
import { createEffect, createSignal, on, Show } from "solid-js";
import cx from "classnames";
import { PatientList } from "@/components/Fhir/components";
import { patientService } from "@/components/Fhir/services";
import { createContext } from "@/shared/utils";
import { createTracked } from "@/shared/hooks";
import { Gender } from "@/components/Fhir/models/base";
import { Nullable } from "@/shared/types";

export const [useFhir, FhirProvider] = createContext("Fhir", () => {
  const [patientName, setPatientName] = createSignal<Nullable<string>>(null);
  const [gender, setGender] = createSignal<Nullable<Gender>>(null);
  const [limit, setLimit] = createSignal<Nullable<number>>(null);

  const [patients, fetchPatients] = createTracked({
    fn: () =>
      patientService.search({
        name: patientName(),
        gender: gender(),
        limit: limit(),
      }),
  });

  createEffect(() => {});

  createEffect(
    on([patientName, gender, limit], async () => {
      console.log("xDDD");
      await fetchPatients();
    })
  );

  return {
    patientName,
    gender,
    limit,
    patients,
    setPatientName,
    setGender,
    setLimit,
    fetchPatients,
  } as const;
});

const Content = () => {
  const { patientName, setPatientName, setGender, setLimit, fetchPatients } =
    useFhir();

  return (
    <section class="patient-search-panel">
      <Textfield
        value={patientName()}
        onChange={setPatientName}
        label="Pacjent"
        placeholder="Wyszukaj imię..."
      />
      <div
        class={cx("patient-list", {
          "patient-list--visible": patientName(),
        })}>
        <Show when={patientName()}>
          <OutlineBox label="Wyniki wyszukiwania" class="p-0 w-full h-full">
            <PatientList />
          </OutlineBox>
        </Show>
      </div>
    </section>
  );
};

export const Fhir = () => (
  <FhirProvider>
    <Content />
  </FhirProvider>
);
