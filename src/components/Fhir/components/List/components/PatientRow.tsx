import { Patient } from "@/components/Fhir/models";
import { Component } from "solid-js";
import { FiArrowRight } from "solid-icons/fi";
const { fullname, gender, birthdate, identifier, identifierTitle } =
  Patient.Row;
import { Link } from "solid-app-router";

interface Props {
  patient: Patient;
}
export const PatientRow: Component<Props> = (props) => (
  <tr class="patient-list-row">
    <td title={fullname(props.patient)}>{fullname(props.patient)}</td>
    <td title={gender(props.patient)}>{gender(props.patient)}</td>
    <td title={birthdate(props.patient)}>{birthdate(props.patient)}</td>
    <td title={identifierTitle(props.patient)}>{identifier(props.patient)}</td>
    <td>
      <Link href={props.patient.id} class="patient-list-row-button">
        <FiArrowRight />
      </Link>
    </td>
  </tr>
);
