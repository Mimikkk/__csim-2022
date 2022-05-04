import { Patient } from "@/components/Fhir/models";

export const mockPatient: Patient = {
  resourceType: "Patient",
  id: "0aa1bfe9-37ab-4e74-812e-cbf6f04678",
  meta: {
    versionId: "1",
    lastUpdated: "2021-12-01T13:30:26.514Z",
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 0aa1bfe9-37ab-4e74-812e-cbf6f04678</p><p><b>name</b>: Larissa Eckert (official)</p><p><b>telecom</b>: ph: 0221 123466(home)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 3/1/1980</p><p><b>address</b>: Meisterstra&#xDF;e 12 Dortmund Nordrhein-Westfalen 44137 (home)</p><p><b>maritalStatus</b>: M <span style="background: LightGoldenRodYellow ">(Details : {http://terminology.hl7.org/CodeSystem/v3-MaritalStatus code "M" := "M)</span></p></div>',
  },
  name: [
    {
      use: "official",
      family: "Eckert",
      given: ["Larissa"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0221 123466",
      use: "home",
    },
  ],
  gender: "female",
  birthDate: "1980-03-01",
  address: [
    {
      use: "home",
      type: "both",
      line: ["Meisterstra\u00dfe 12"],
      city: "Dortmund",
      district: "Germany",
      state: "Nordrhein-Westfalen",
      postalCode: "44137",
    },
  ],
  maritalStatus: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
        code: "M",
      },
    ],
  },
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0131",
              code: "N",
            },
          ],
        },
      ],
      name: {
        use: "official",
        family: "Eckert",
        given: ["Hans"],
      },
      telecom: [
        {
          system: "phone",
          value: "0221 123466",
          use: "home",
        },
      ],
      address: {
        use: "home",
        type: "both",
        line: ["Meisterstra\u00dfe 12"],
        city: "Dortmund",
        district: "Germany",
        state: "Nordrhein-Westfalen",
        postalCode: "44137",
      },
      gender: "male",
    },
  ],
} as any;
