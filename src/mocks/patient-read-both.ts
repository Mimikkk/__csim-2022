import { ReadResponse } from "@/components/Fhir/services";

export const mockPatientRead: ReadResponse = {
  patient: {
    resourceType: "Patient",
    id: "1190111",
    meta: {
      versionId: "1",
      lastUpdated: "2020-06-07T20:52:41.802+00:00",
      source: "#NUWvCkoJK1vSEdNM",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">Kamila Liberali</div>',
    },
    identifier: [
      {
        system: "http://clinfhir.com/fhir/NamingSystem/identifier",
        value: "kamila_liberali@hotmail.com",
      },
    ],
    name: [
      {
        use: "official",
        text: "Kamila Liberali",
        family: "Liberali",
        given: ["Kamila"],
      },
    ],
    gender: "female",
    birthDate: "1995-01-12",
  },
  observations: [
    {
      resourceType: "Observation",
      id: "1190160",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 84 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-03T17:52:43-03:00",
      valueQuantity: { value: 84, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190161",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 29 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-03T17:52:43-03:00",
      valueQuantity: { value: 29, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190162",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-03T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190163",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 74.3 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-03T17:52:43-03:00",
      valueQuantity: { value: 74.3, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190159",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.5 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-03T17:52:43-03:00",
      valueQuantity: { value: 36.5, unit: "C" },
    },
    {
      resourceType: "Observation",
      id: "1190157",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-10T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190158",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 78.4 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-10T17:52:43-03:00",
      valueQuantity: { value: 78.4, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190155",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 86 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-10T17:52:43-03:00",
      valueQuantity: { value: 86, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190156",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 33 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-10T17:52:43-03:00",
      valueQuantity: { value: 33, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190154",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.6 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-10T17:52:43-03:00",
      valueQuantity: { value: 36.6, unit: "C" },
    },
    {
      resourceType: "Observation",
      id: "1190149",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.5 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-17T17:52:43-03:00",
      valueQuantity: { value: 36.5, unit: "C" },
    },
    {
      resourceType: "Observation",
      id: "1190150",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 83 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-17T17:52:43-03:00",
      valueQuantity: { value: 83, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190153",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 74.4 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-17T17:52:43-03:00",
      valueQuantity: { value: 74.4, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190151",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 32 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-17T17:52:43-03:00",
      valueQuantity: { value: 32, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190152",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-17T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190148",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 72.2 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-24T17:52:43-03:00",
      valueQuantity: { value: 72.2, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190146",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 26 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-24T17:52:43-03:00",
      valueQuantity: { value: 26, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190147",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-24T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190144",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.6 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-24T17:52:43-03:00",
      valueQuantity: { value: 36.6, unit: "C" },
    },
    {
      resourceType: "Observation",
      id: "1190145",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 86 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-24T17:52:43-03:00",
      valueQuantity: { value: 86, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190142",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-31T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190143",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 75.6 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-31T17:52:43-03:00",
      valueQuantity: { value: 75.6, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190140",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 81 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-31T17:52:43-03:00",
      valueQuantity: { value: 81, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190141",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 33 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-31T17:52:43-03:00",
      valueQuantity: { value: 33, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190139",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.6 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-05-31T17:52:43-03:00",
      valueQuantity: { value: 36.6, unit: "C" },
    },
    {
      resourceType: "Observation",
      id: "1190137",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Height, 90 cm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8302-2" }],
        text: "Height",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-06-07T17:52:43-03:00",
      valueQuantity: { value: 90, unit: "cm" },
    },
    {
      resourceType: "Observation",
      id: "1190138",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Weight, 75.5 Kg</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "3141-9" }],
        text: "Weight",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-06-07T17:52:43-03:00",
      valueQuantity: { value: 75.5, unit: "Kg" },
    },
    {
      resourceType: "Observation",
      id: "1190135",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Heart Rate, 75 bpm</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8867-4" }],
        text: "Heart Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-06-07T17:52:43-03:00",
      valueQuantity: { value: 75, unit: "bpm" },
    },
    {
      resourceType: "Observation",
      id: "1190136",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Respiratory Rate, 31 resp/min</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "9279-1" }],
        text: "Respiratory Rate",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-06-07T17:52:43-03:00",
      valueQuantity: { value: 31, unit: "resp/min" },
    },
    {
      resourceType: "Observation",
      id: "1190134",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:44.204+00:00",
        source: "#r0AgvWQAokT3QArD",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">Body Temperature, 36.4 C</div>',
      },
      status: "final",
      code: {
        coding: [{ system: "http://loinc.org", code: "8310-5" }],
        text: "Body Temperature",
      },
      subject: { reference: "Patient/1190111" },
      effectiveDateTime: "2020-06-07T17:52:43-03:00",
      valueQuantity: { value: 36.4, unit: "C" },
    },
  ],
  medicationStatements: [
    {
      resourceType: "MedicationStatement",
      id: "1190175",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab twice daily",
          timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190176",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190165",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "2 puffs every 4 hours as needed",
          timing: { repeat: { frequency: 1, period: 4, periodUnit: "h" } },
          asNeededBoolean: true,
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190173",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">losartan 100mg + hydrochlorothiazide 12.5mg once daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "444639002",
            display: "losartan 100mg + hydrochlorothiazide 12.5mg",
          },
        ],
        text: "losartan 100mg + hydrochlorothiazide 12.5mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190174",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab twice daily",
          timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190182",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">isosorbide mononitrate 20mg once daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "319134001",
            display: "isosorbide mononitrate 20mg",
          },
        ],
        text: "isosorbide mononitrate 20mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily at bedtime",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190171",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">gabapentin 600mg twice daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "323021008",
            display: "gabapentin 600mg",
          },
        ],
        text: "gabapentin 600mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "twice daily",
          timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190183",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "3 times daily",
          timing: { repeat: { frequency: 3, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190172",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">insulin glargine 100units/mL 28 units nocte</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "400847007",
            display: "insulin glargine 100units/mL injection",
          },
        ],
        text: "insulin glargine 100units/mL injection",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "28 units before bed",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190180",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">zolpidem 5mg sublingual tablet, 1 nocte</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "442160008",
            display: "zolpidem 5mg sublingual tablet",
          },
        ],
        text: "zolpidem 5mg sublingual tablet",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab before bed",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190181",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">lisinopril 20mg mane</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "318860005",
            display: "lisinopril 20mg",
          },
        ],
        text: "lisinopril 20mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190170",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">citalopram 20 mg once daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "321987003",
            display: "citalopram 20 mg",
          },
        ],
        text: "citalopram 20 mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190179",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: true,
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190168",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "twice daily",
          timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190169",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">chlortalidone 15 mg once daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "376321007",
            display: "chlortalidone 15 mg",
          },
        ],
        text: "chlortalidone 15 mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190177",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "2 tabs once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: true,
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190166",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190178",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
      },
      text: {
        status: "generated",
        div: '<div xmlns="http://www.w3.org/1999/xhtml">simvastatin 40mg once daily</div>',
      },
      status: "active",
      medicationCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/ct",
            code: "429374003",
            display: "simvastatin 40mg",
          },
        ],
        text: "simvastatin 40mg",
      },
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "1 tab once daily",
          timing: { repeat: { frequency: 1, period: 1, periodUnit: "d" } },
          asNeededBoolean: true,
        },
      ],
    },
    {
      resourceType: "MedicationStatement",
      id: "1190167",
      meta: {
        versionId: "1",
        lastUpdated: "2020-06-07T20:52:45.458+00:00",
        source: "#z9IOhkcxDaXTtzjp",
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
      subject: { reference: "Patient/1190111" },
      dosage: [
        {
          text: "2 puffs twice daily",
          timing: { repeat: { frequency: 2, period: 1, periodUnit: "d" } },
          asNeededBoolean: false,
        },
      ],
    },
  ],
} as any;
