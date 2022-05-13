import { CodeableConcept, Base } from "./base";

interface Contained {
  code?: CodeableConcept;
}

export interface MedicationStatement extends Base {
  id: string;
  medicationCodeableConcept?: CodeableConcept;
  dosage: CodeableConcept[];
  contained?: Contained[];
  status: string;
}

export module MedicationStatement {
  export module Card {
    export const dosage = ({ dosage }: MedicationStatement) =>
      dosage[0]?.text || "-";

    export const value = ({
      medicationCodeableConcept,
      contained,
    }: MedicationStatement) =>
      medicationCodeableConcept?.text ||
      medicationCodeableConcept?.coding?.[0].display ||
      contained?.[0]?.code?.text ||
      "-";

    export const status = ({ status }: MedicationStatement) => status || "-";
  }
}
