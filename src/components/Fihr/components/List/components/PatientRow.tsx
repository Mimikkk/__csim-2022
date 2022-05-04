import { Patient } from "@/components/Fihr/models";
import { Component } from "solid-js";
const { fullname, gender, birthdate, identifier } = Patient.Row;

interface Props {
  patient: Patient;
}
export const PatientRow: Component<Props> = (props) => {
  return (
    <tr class="patient-list-row">
      <td>{fullname(props.patient)}</td>
      <td>{gender(props.patient)}</td>
      <td>{birthdate(props.patient)}</td>
      <td>{identifier(props.patient)}</td>
    </tr>
  );
};
