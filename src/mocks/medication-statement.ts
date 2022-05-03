import { MedicationStatement } from "@/components/Fihr/models";

export const mockMedicationStatement: MedicationStatement = {
  resourceType: "MedicationStatement",
  id: "1",
  meta: {
    versionId: "1",
    lastUpdated: "2020-11-23T13:46:26.673Z",
    profile: [
      "https://fhir.kbv.de/StructureDefinition/74_PR_VoS_Dosierung|1.10.010",
    ],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>meta</b>: </p><p><b>status</b>: active</p><p><b>medication</b>: <a href="Medication/2">Medication/2</a></p><p><b>subject</b>: <a href="Patient/139">Patient/139</a></p><p><b>taken</b>: na</p><p><b>dosage</b>: </p><p><b style="color: maroon">Exception generating Narrative: type TFhirDosage not handled yet</b></p></div>',
  },
  extension: [
    {
      url: "https://fhir.kbv.de/StructureDefinition/74_EX_VoS_MPKennzeichen",
      valueBoolean: true,
    },
  ],
  status: "active",
  medicationReference: {
    reference: "Medication/2",
  },
  subject: {
    reference: "Patient/139",
  },
  taken: "na",
  dosage: [
    {
      text: "Dj",
    },
  ],
} as any;
