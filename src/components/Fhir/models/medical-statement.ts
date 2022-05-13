import { CodeableConcept } from "./base";

export interface MedicationStatement {
  medicationCodeableConcept?: CodeableConcept;
  dosage: CodeableConcept[];
  contained?: {
    code?: CodeableConcept;
    text?: string;
  }[];
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
  }
}
