import { Patient } from "@/components/Fihr/models";
import { Component } from "solid-js";

interface Props {
  patient: Patient;
}
export const PatientRow: Component<Props> = (props) => {
  return (
    <tr class="patient-list-row">
      <td>{Patient.Row.fullname(props.patient)}</td>
      <td>{Patient.Row.gender(props.patient)}</td>
      <td>{Patient.Row.birthdate(props.patient)}</td>
      <td>{Patient.Row.identifier(props.patient)}</td>
    </tr>
  );
};
