import { OutlineBox, Textfield } from "@/shared/components";
import { Show } from "solid-js";
import { PatientList } from "@/components/Fhir/components";
import { Status } from "@/shared/types";
import { FhirProvider, useFhir } from "@/components/Fhir/context";
import cx from "classnames";

const Content = () => {
  const { patientName, setPatientName, setGender, patientsStatus, setLimit } =
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
          "patient-list--visible": !Status.isIdle(patientsStatus()),
        })}>
        <Show when={!Status.isIdle(patientsStatus())}>
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
