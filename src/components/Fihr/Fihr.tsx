import { OutlineBox, Textfield } from "@/shared/components";
import { createSignal, Show } from "solid-js";
import cx from "classnames";
import { PatientList } from "@/components/Fihr/components";

export const Fihr = () => {
  const [patientName, setPatientName] = createSignal("123");

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
          <OutlineBox label="Wyniki wyszukiwania" class="w-full h-full">
            <PatientList />
          </OutlineBox>
        </Show>
      </div>
    </section>
  );
};
