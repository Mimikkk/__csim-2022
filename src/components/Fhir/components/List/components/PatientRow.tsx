import { Patient } from "@/components/Fhir/models";
import { Component } from "solid-js";
import { FiArrowRight } from "solid-icons/fi";
const { fullname, gender, birthdate, identifier } = Patient.Row;
import { Link } from "solid-app-router";

interface Props {
  patient: Patient;
}
export const PatientRow: Component<Props> = (props) => (
  <tr class="patient-list-row">
    <td>{fullname(props.patient)}</td>
    <td>{gender(props.patient)}</td>
    <td>{birthdate(props.patient)}</td>
    <td>{identifier(props.patient)}</td>
    <td>
      <Link href={props.patient.id} class="patient-list-row-button">
        <FiArrowRight />
      </Link>
    </td>
  </tr>
);
