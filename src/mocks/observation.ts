import { Observation } from "@/components/Fhir/models";

export const mockObservation: Observation = {
  resourceType: "Observation",
  id: "0015ea2f-f99e-0a68-9ef4-7f1c61af6c17",
  meta: {
    versionId: "2",
    lastUpdated: "2021-06-01T08:39:51.969Z",
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 0015ea2f-f99e-0a68-9ef4-7f1c61af6c17</p><p><b>status</b>: final</p><p><b>category</b>: laboratory <span style="background: LightGoldenRodYellow ">(Details : {http://hl7.org/fhir/observation-category code "laboratory" := "laboratory", given as "laboratory"})</span></p><p><b>code</b>: SARS-CoV-2 RNA Pnl Resp NAA+probe <span style="background: LightGoldenRodYellow ">(Details : {LOINC code "94531-1" := "94531-1", given as "SARS-CoV-2 RNA Pnl Resp NAA+probe"})</span></p><p><b>subject</b>: <a href="urn:uuid:2fd1e877-04eb-b820-619f-06f14e918be7">urn:uuid:2fd1e877-04eb-b820-619f-06f14e918be7</a></p><p><b>context</b>: <a href="urn:uuid:2774bb0a-2550-b774-a8ad-66e229487cf5">urn:uuid:2774bb0a-2550-b774-a8ad-66e229487cf5</a></p><p><b>effective</b>: 2/23/2020 2:13:44 PM</p><p><b>issued</b>: 2/23/2020 2:13:44 PM</p><p><b>value</b>: Detected (qualifier value) <span style="background: LightGoldenRodYellow ">(Details : {SNOMED CT code "260373001" := "260373001", given as "Detected (qualifier value)"})</span></p></div>',
  },
  status: "final",
  category: [
    {
      coding: [
        {
          system: "http://hl7.org/fhir/observation-category",
          code: "laboratory",
          display: "laboratory",
        },
      ],
    },
  ],
  code: {
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/iso-21090-EN-use",
        valueCode: "I",
      },
    ],
    coding: [
      {
        system: "http://loinc.org",
        code: "94531-1",
        display: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
      },
    ],
    text: "SARS-CoV-2 RNA Pnl Resp NAA+probe",
  },
  subject: {
    reference: "urn:uuid:2fd1e877-04eb-b820-619f-06f14e918be7",
  },
  context: {
    reference: "urn:uuid:2774bb0a-2550-b774-a8ad-66e229487cf5",
  },
  effectiveDateTime: "2020-02-23T14:13:44+01:00",
  issued: "2020-02-23T14:13:44.273+01:00",
  valueCodeableConcept: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "260373001",
        display: "Detected (qualifier value)",
      },
    ],
    text: "Detected (qualifier value)",
  },
} as any;
