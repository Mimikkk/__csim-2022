import { For } from "solid-js";
import { mockPatients } from "@/mocks/patients";
import "./PatientList.scss";
import { PatientRow } from "./components";

export const PatientList = () => {
  return (
    <table class="w-full">
      <thead>
        <tr>
          <th>Imię</th>
          <th>Płeć</th>
          <th>Data urodzenia</th>
          <th>Identyfikator</th>
        </tr>
      </thead>
      <tbody>
        <For each={mockPatients}>
          {(patient) => <PatientRow patient={patient} />}
        </For>
      </tbody>
    </table>
  );
};
