import { MedicationStatement } from "@/components/Fhir/models";

export const mockMedicationStatements: MedicationStatement[] = [
  {
    resourceType: "MedicationStatement",
    id: "3027397e-bcc1-4aa0-baa6-cf5c4b6380e4",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T19:09:49.124+00:00",
      source: "#HDfdpXWpnUNA6Y5a",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationstatement",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "active",
    medicationReference: {
      reference: "Medication/d0734e7b-f6d1-4b03-809e-4aef14a4b642",
    },
    subject: {
      reference: "Patient/001298bb-e1cd-41b9-95d6-8ee063ddd334",
    },
    context: {
      reference: "Encounter/fbdc9811-4201-4e55-8138-a31e8022f5cf",
    },
    effectiveDateTime: "1998-01-20T14:08:13-06:00",
    dateAsserted: "1998-01-20T14:08:13-06:00",
    derivedFrom: [
      {
        reference: "MedicationRequest/9a608325-5d66-4ea3-8dbb-78136ae28592",
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "c36fd244-90f5-4165-ba82-245c70089966",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:11:23.674+00:00",
      source: "#nNI8yzgTb2jfYz4J",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationstatement",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "active",
    medicationReference: {
      reference: "Medication/a08d4a54-ef39-476b-ae79-2ea2b2263408",
    },
    subject: {
      reference: "Patient/df80d5fc-6698-4166-b5fc-772f33dc5ed7",
    },
    context: {
      reference: "Encounter/8b7844ed-d5b8-46e6-8e95-f13d1025c9d6",
    },
    effectiveDateTime: "2020-03-11T00:39:35-05:00",
    dateAsserted: "2020-03-11T00:39:35-05:00",
    derivedFrom: [
      {
        reference: "MedicationRequest/2e17ac24-455e-4a8b-ae36-22c6d09346d7",
      },
    ],
    reasonCode: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "40541001",
            display: "Acute pulmonary edema (disorder)",
          },
        ],
        text: "Acute pulmonary edema (disorder)",
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546237",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">beclomethasone 2 puffs twice daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "376733004",
          display: "beclomethasone dipropionate 40mcg aerosol",
        },
      ],
      text: "beclomethasone dipropionate 40mcg aerosol",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "2 puffs twice daily",
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d",
          },
        },
        asNeededBoolean: false,
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546249",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">terbinafine 250mg once daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "324718007",
          display: "terbinafine 250mg",
        },
      ],
      text: "terbinafine 250mg",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "1 tab once daily",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
          },
        },
        asNeededBoolean: true,
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546238",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">carvedilol 25 mg twice daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "318632005",
          display: "carvedilol 25 mg",
        },
      ],
      text: "carvedilol 25 mg",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "twice daily",
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546246",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">omeprazole 40mg daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "407848004",
          display: "omeprazole 40mg e/c tablet",
        },
      ],
      text: "omeprazole 40mg e/c tablet ",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "1 tab once daily",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546235",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">salbutamol inhaler 2 puffs every 4 hours as required</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: " 320176004",
          display: " salbutamol 100micrograms/inhaler ",
        },
      ],
      text: "salbutamol 100micrograms/inhaler",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "2 puffs every 4 hours as needed",
        timing: {
          repeat: {
            frequency: 1,
            period: 4,
            periodUnit: "h",
          },
        },
        asNeededBoolean: true,
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546247",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">prednisone 20mg 2 tabs/day</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "325456002",
          display: "prednisone 20mg",
        },
      ],
      text: "prednisone 20mg",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "2 tabs once daily",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
          },
        },
        asNeededBoolean: true,
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546236",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">aspirin 81mg once daily</div>',
    },
    contained: [
      {
        resourceType: "Medication",
        id: "med1",
        text: {
          status: "generated",
          div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">aspirin 81mg e/c tablet</div></div>',
        },
        code: {
          coding: [
            {
              system: "http://snomed.info/ct",
              code: "370167008 ",
              display: "aspirin 81mg e/c tablet ",
            },
          ],
          text: "aspirin 81mg e/c tablet",
        },
      },
    ],
    status: "active",
    medicationReference: {
      reference: "#med1",
      display: "aspirin 81mg e/c tablet",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "once daily",
        timing: {
          repeat: {
            frequency: 1,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546244",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">metformin 1000mg twice daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "411533003",
          display: "metformin 1000mg",
        },
      ],
      text: "metformin 1000mg",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "1 tab twice daily",
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546245",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">naproxen 500mg twice daily</div>',
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "329839005",
          display: "naproxen 500mg e/c tablet",
        },
      ],
      text: "naproxen 500mg e/c tablet",
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "1 tab twice daily",
        timing: {
          repeat: {
            frequency: 2,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
  {
    resourceType: "MedicationStatement",
    id: "1546253",
    meta: {
      versionId: "1",
      lastUpdated: "2020-10-08T17:25:01.352+00:00",
      source: "#RhbZCWL7S6KbtttE",
    },
    status: "active",
    medicationCodeableConcept: {
      coding: [
        {
          system: "http://snomed.info/ct",
          code: "321323009",
          display: "buspirone 5mg",
        },
      ],
    },
    subject: {
      reference: "Patient/1546181",
    },
    dosage: [
      {
        text: "3 times daily",
        timing: {
          repeat: {
            frequency: 3,
            period: 1,
            periodUnit: "d",
          },
        },
      },
    ],
  },
] as any;
