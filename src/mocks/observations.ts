import { Observation } from "@/components/Fhir/models";

export const mockObservations: Observation[] = [
  {
    resourceType: "Observation",
    id: "48a6d6ed-7f26-4fd2-af3d-88a8d837ef6a",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2339-0",
          display: "Glucose",
        },
      ],
      text: "Glucose",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/2a923ba1-e25b-435a-95c9-c4541056ea99",
    },
    effectiveDateTime: "1996-01-28T11:33:43-06:00",
    issued: "1996-01-28T11:33:43.946-06:00",
    valueQuantity: {
      value: 85.22,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL",
    },
  },
  {
    resourceType: "Observation",
    id: "0c1bac80-6f8f-4850-8a6e-e3dbcf327bbe",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "789-8",
          display: "RBC Auto (Bld) [#/Vol]",
        },
      ],
      text: "RBC Auto (Bld) [#/Vol]",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/bcb66e82-8cf6-4253-87b7-d662424c08e0",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 4.7379,
      unit: "10*6/uL",
      system: "http://unitsofmeasure.org",
      code: "10*6/uL",
    },
  },
  {
    resourceType: "Observation",
    id: "0de1b3c5-dca7-4812-9db9-655149605090",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "32207-3",
          display:
            "Platelet distribution width [Entitic volume] in Blood by Automated count",
        },
      ],
      text: "Platelet distribution width [Entitic volume] in Blood by Automated count",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/bcb66e82-8cf6-4253-87b7-d662424c08e0",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 288.71,
      unit: "fL",
      system: "http://unitsofmeasure.org",
      code: "fL",
    },
  },
  {
    resourceType: "Observation",
    id: "f913e442-4fd5-445d-85d2-6c8dedf7ba80",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "786-4",
          display: "MCHC [Mass/volume] by Automated count",
        },
      ],
      text: "MCHC [Mass/volume] by Automated count",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/bcb66e82-8cf6-4253-87b7-d662424c08e0",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 34.38,
      unit: "g/dL",
      system: "http://unitsofmeasure.org",
      code: "g/dL",
    },
  },
  {
    resourceType: "Observation",
    id: "bc4bb34c-04ae-4dd9-9de2-e3c836dec391",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "49765-1",
          display: "Calcium",
        },
      ],
      text: "Calcium",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/2a923ba1-e25b-435a-95c9-c4541056ea99",
    },
    effectiveDateTime: "1996-01-28T11:33:43-06:00",
    issued: "1996-01-28T11:33:43.946-06:00",
    valueQuantity: {
      value: 9.92,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL",
    },
  },
  {
    resourceType: "Observation",
    id: "57cb2045-bf48-4f2b-8b5c-a8edc5c30042",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "21000-5",
          display:
            "RDW - Erythrocyte distribution width Auto (RBC) [Entitic vol]",
        },
      ],
      text: "RDW - Erythrocyte distribution width Auto (RBC) [Entitic vol]",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/bcb66e82-8cf6-4253-87b7-d662424c08e0",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 42.603,
      unit: "fL",
      system: "http://unitsofmeasure.org",
      code: "fL",
    },
  },
  {
    resourceType: "Observation",
    id: "1c1fc342-6a58-40ff-8736-8d22201d5168",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "6298-4",
          display: "Potassium",
        },
      ],
      text: "Potassium",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/e9edd669-b752-4ed3-bcb5-5b4677ef4ad8",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 4.7,
      unit: "mmol/L",
      system: "http://unitsofmeasure.org",
      code: "mmol/L",
    },
  },
  {
    resourceType: "Observation",
    id: "656ef597-7f8f-4745-9cb9-e8911ce26681",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "20570-8",
          display: "Hematocrit [Volume Fraction] of Blood",
        },
      ],
      text: "Hematocrit [Volume Fraction] of Blood",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/bcb66e82-8cf6-4253-87b7-d662424c08e0",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 34.624,
      unit: "%",
      system: "http://unitsofmeasure.org",
      code: "%",
    },
  },
  {
    resourceType: "Observation",
    id: "3324e3e7-1669-4901-a97c-7d3a2a4145d6",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "10834-0",
          display: "Globulin [Mass/\u200bvolume] in Serum by calculation",
        },
      ],
      text: "Globulin [Mass/\u200bvolume] in Serum by calculation",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/64187e39-8b2c-44cf-ad4a-20112f5cf4ce",
    },
    effectiveDateTime: "1996-01-28T11:33:43-06:00",
    issued: "1996-01-28T11:33:43.946-06:00",
    valueQuantity: {
      value: 2.7251,
      unit: "g/L",
      system: "http://unitsofmeasure.org",
      code: "g/L",
    },
  },
  {
    resourceType: "Observation",
    id: "93c1ed97-5c84-4b91-a85e-60ef4e37f9b8",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2885-2",
          display: "Protein [Mass/\u200bvolume] in Serum or Plasma",
        },
      ],
      text: "Protein [Mass/\u200bvolume] in Serum or Plasma",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/64187e39-8b2c-44cf-ad4a-20112f5cf4ce",
    },
    effectiveDateTime: "1996-01-28T11:33:43-06:00",
    issued: "1996-01-28T11:33:43.946-06:00",
    valueQuantity: {
      value: 60.213,
      unit: "g/dL",
      system: "http://unitsofmeasure.org",
      code: "g/dL",
    },
  },
  {
    resourceType: "Observation",
    id: "7ce644c0-815c-4be1-ba2a-9d31e99c047e",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "2069-3",
          display: "Chloride",
        },
      ],
      text: "Chloride",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/64187e39-8b2c-44cf-ad4a-20112f5cf4ce",
    },
    effectiveDateTime: "1996-01-28T11:33:43-06:00",
    issued: "1996-01-28T11:33:43.946-06:00",
    valueQuantity: {
      value: 105.16,
      unit: "mmol/L",
      system: "http://unitsofmeasure.org",
      code: "mmol/L",
    },
  },
  {
    resourceType: "Observation",
    id: "836a54ef-29b2-436d-ad6e-91ff77d6a188",
    meta: {
      versionId: "1",
      lastUpdated: "2020-03-24T21:21:18.283+00:00",
      source: "#RXmG8kUnRZO3LkK1",
      profile: [
        "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab",
      ],
      tag: [
        {
          system: "https://smarthealthit.org/tags",
          code: "Covid19 synthetic population from Synthea",
        },
      ],
    },
    status: "final",
    category: [
      {
        coding: [
          {
            system:
              "http://terminology.hl7.org/CodeSystem/observation-category",
            code: "laboratory",
            display: "laboratory",
          },
        ],
      },
    ],
    code: {
      coding: [
        {
          system: "http://loinc.org",
          code: "38483-4",
          display: "Creatinine",
        },
      ],
      text: "Creatinine",
    },
    subject: {
      reference: "Patient/6dc0aa92-2689-49fa-a7b5-6e68d45536e4",
    },
    encounter: {
      reference: "Encounter/e9edd669-b752-4ed3-bcb5-5b4677ef4ad8",
    },
    effectiveDateTime: "1995-07-11T12:33:43-05:00",
    issued: "1995-07-11T12:33:43.946-05:00",
    valueQuantity: {
      value: 1.04,
      unit: "mg/dL",
      system: "http://unitsofmeasure.org",
      code: "mg/dL",
    },
  },
] as any;
