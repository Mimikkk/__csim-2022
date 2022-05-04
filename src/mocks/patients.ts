import { Patient } from "@/components/Fhir/models";

export const mockPatients: Patient[] = [
  {
    resourceType: "Patient",
    id: "583468",
    meta: {
      versionId: "8",
      lastUpdated: "2021-11-20T13:11:39.102+00:00",
      source: "#R5vWefS4xwccXnyY",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText"/><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>G123456789</td></tr><tr><td>Address</td><td/></tr><tr><td>Date of birth</td><td><span>01 January 2019</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        value: "G123456789",
      },
      {
        value: "0101",
      },
      {
        value: "patient",
      },
      {
        value: "NTUTT_LAB1321_patient",
      },
    ],
    active: true,
    name: [
      {
        text: "Gene",
      },
    ],
    telecom: [
      {
        value: "a0938765923@gmail.com",
      },
    ],
    gender: "male",
    birthDate: "2019-01-01",
    address: [
      {
        text: "\u677f\u6a4b3333\u865f11\u6a13",
      },
    ],
  },
  {
    resourceType: "Patient",
    id: "592172",
    meta: {
      versionId: "1",
      lastUpdated: "2020-01-23T14:37:00.248+00:00",
      source: "#1gIEnrFGgWqzDUvB",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">roxy <b>CLARK </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>1291067</td></tr><tr><td>Date of birth</td><td><span>15 December 2012</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        system: "http://www.nhsdev.net/psn",
        value: "1291067",
      },
    ],
    active: true,
    name: [
      {
        use: "official",
        family: "clark",
        given: ["roxy"],
      },
    ],
    gender: "female",
    birthDate: "2012-12-15",
  },
  {
    resourceType: "Patient",
    id: "591164",
    meta: {
      versionId: "1",
      lastUpdated: "2020-01-17T06:22:17.299+00:00",
      source: "#VUGIINPlvpnILwxF",
    },
    language: "EN",
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>ID</b>:MCH</p><p><b>SENDING APPLICATION</b>:HNAM</p><p><b>PATIENT NAME </b>:ZZZTEST BABYBOYALICIA</p><br/><br/><p>Patient ID : MCH@HNAM@129991</p><p>Gender : Male</p><p>DOB : 20191007150000</p></div>',
    },
    extension: [
      {
        url: "http://hl7.org/fhir/StructureDefinition/us-core-race",
        valueCodeableConcept: {
          coding: [
            {
              system: "http://hl7.org/fhir/v3/Race",
            },
          ],
        },
      },
      {
        url: "http://hl7.org/fhir/StructureDefinition/us-core-ethnicity",
        valueCodeableConcept: {
          coding: [
            {
              system: "http://hl7.org/fhir/v3/Ethnicity",
            },
          ],
        },
      },
    ],
    identifier: [
      {
        id: "6c39821f-3578-4933-9737-dbb9a275b49e",
        use: "usual",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "urn:oid:1.2.36.146.595.217.0.1",
        value: "129991",
        assigner: {
          display: "MCH",
        },
      },
      {
        system: "http://new-republic.gov/galactic-citizen-identifier",
      },
      {
        system: "http://caringly.tech/hospital-patient-identifier",
        value: "MCH@HNAM@129991",
      },
    ],
    active: true,
    name: [
      {
        use: "official",
        family: "ZZZTEST",
        given: ["BABYBOYALICIA"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "(310)764-2656",
        use: "home",
        rank: 1,
      },
      {
        system: "phone",
        use: "work",
        rank: 2,
      },
    ],
    gender: "female",
    birthDate: "2019-09-30",
    deceasedBoolean: false,
    address: [
      {
        use: "home",
        line: ["1201 WEST ROSECRANS AVE "],
        city: "COMPTON",
        state: "CA",
        postalCode: "90706",
        country: "US",
      },
    ],
    generalPractitioner: [
      {
        identifier: {
          use: "official",
          system: "http://caringly.tech/hospital-provider-identifier",
        },
      },
    ],
    managingOrganization: {
      reference: "Organization/582205",
    },
  },
  {
    resourceType: "Patient",
    id: "624859",
    meta: {
      versionId: "4",
      lastUpdated: "2020-02-19T15:18:08.662+00:00",
      source: "#PY9voNiz5UyBFWju",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Spencer <b>REED </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-5475767</td></tr><tr><td>Address</td><td><span>FBI-Drive 1234 </span><br/><span>Quantico </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        use: "official",
        system: "http://starfleet-hospital.ufp/NamingSystem/patient-identifier",
        value: "NCC-5475767",
      },
    ],
    active: true,
    name: [
      {
        use: "official",
        family: "Reed",
        given: ["Spencer"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)123456-123456",
        use: "home",
        rank: 1,
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        use: "home",
        type: "both",
        text: "FBI-Drive 1234, Quantico",
        line: ["FBI-Drive 1234"],
        city: "Quantico",
        postalCode: "001122",
      },
    ],
  },
  {
    resourceType: "Patient",
    id: "597967",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-06T12:25:25.766+00:00",
      source: "#BoAoz3whJh8i4C73",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">James Tiberius <b>KIRK </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>007</td></tr><tr><td>Address</td><td><span>Milchstrasse 42 </span><br/><span>Sp\u00f6ck </span></td></tr><tr><td>Date of birth</td><td><span>26 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system:
          "http://starfleet-hospital.ufp/fhir/NamingSystem/patient-identifier",
        value: "007",
      },
    ],
    active: true,
    name: [
      {
        use: "official",
        family: "Kirk",
        given: ["James", "Tiberius"],
      },
    ],
    birthDate: "2226-10-26",
    address: [
      {
        use: "home",
        type: "both",
        line: ["Milchstrasse 42"],
        city: "Sp\u00f6ck",
        district: "Rainbow",
        postalCode: "76297",
      },
    ],
  },
  {
    resourceType: "Patient",
    id: "597968",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-06T12:25:53.382+00:00",
      source: "#GsKbBHXH0eTKHMRA",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml">\n            <p> Patient Homer Simpson @ Starfleet Hospital</p>\n        </div>',
    },
    identifier: [
      {
        use: "usual",
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system:
          "http://StarfleetHospital.de/fhir/NamingSystem/patient-identifier",
        value: "NCC-1099",
      },
      {
        type: {
          coding: [
            {
              system: "http://fhir.de/CodeSystem/identifier-type-de-basis",
              code: "GKV",
            },
          ],
        },
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "9973264001",
      },
    ],
    active: true,
    name: [
      {
        use: "official",
        family: "Simpson",
        given: ["Lisa"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49 (0)12345 - 123456",
        use: "home",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Erde",
          },
        ],
        use: "home",
        type: "both",
        line: ["Milchstrasse 42"],
        city: "Springfield",
        postalCode: "76297",
        country: "DE",
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625604",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-24T14:07:13.759+00:00",
      source: "#e1xTazA0CZqQQzNf",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Michael <b>BURNHAM </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-1032-b</td></tr><tr><td>Address</td><td><span>Milchstra\u00dfe 42 </span><br/><span>Sp\u00f6ck </span><span>Dutschland </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Burnham",
        family: "Burnham",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625605",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-24T14:07:25.234+00:00",
      source: "#zE0XM7z97KSDe0GG",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Michael <b>BURNHAM </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-1032-b</td></tr><tr><td>Address</td><td><span>Milchstra\u00dfe 42 </span><br/><span>Sp\u00f6ck </span><span>Dutschland </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Burnham",
        family: "Burnham",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625606",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-24T14:07:43.283+00:00",
      source: "#DFacWR4tKG9uVgAH",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Michael <b>BURNHAM </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-1032-b</td></tr><tr><td>Address</td><td><span>Milchstra\u00dfe 42 </span><br/><span>Sp\u00f6ck </span><span>Dutschland </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Burnham",
        family: "Burnham",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625607",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-24T14:07:50.644+00:00",
      source: "#e6X0t24yH0wQ9Bna",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Michael <b>BURNHAM </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-1032-b</td></tr><tr><td>Address</td><td><span>Milchstra\u00dfe 42 </span><br/><span>Sp\u00f6ck </span><span>Dutschland </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Burnham",
        family: "Burnham",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625609",
    meta: {
      versionId: "1",
      lastUpdated: "2020-02-24T14:08:13.462+00:00",
      source: "#NrJe0uFgAx4xjGzb",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Michael <b>BURNHAM </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>NCC-1032-b</td></tr><tr><td>Address</td><td><span>Milchstra\u00dfe 42 </span><br/><span>Sp\u00f6ck </span><span>Dutschland </span></td></tr><tr><td>Date of birth</td><td><span>24 October 2226</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Burnham",
        family: "Burnham",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
  {
    resourceType: "Patient",
    id: "625610",
    meta: {
      versionId: "2",
      lastUpdated: "2020-02-24T14:25:20.137+00:00",
      source: "#6nz6kPN60SCEVq1Y",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"> \n         <div class="hapiHeaderText">Michael \n            <b>SMITH</b> \n         </div> \n         <table class="hapiPropertyTable"> \n            <tbody> \n               <tr> \n                  <td>Identifier</td> \n                  <td>NCC-1032-b</td> \n               </tr> \n               <tr> \n                  <td>Address</td> \n                  <td> \n                     <span>Milchstra\u00dfe 42 </span> \n                     <br/> \n                     <span>Sp\u00f6ck </span> \n                     <span>Dutschland </span> \n                  </td> \n               </tr> \n               <tr> \n                  <td>Date of birth</td> \n                  <td> \n                     <span>24 October 2226</span> \n                  </td> \n               </tr> \n            </tbody> \n         </table> \n      </div>',
    },
    identifier: [
      {
        type: {
          coding: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v2-0203",
              code: "MR",
            },
          ],
        },
        system: "http://starfleet-hospital/bliblablub",
        value: "NCC-1032-b",
      },
      {
        system: "http://fhir.de/NamingSystem/gkv/kvid-10",
        value: "1212121212",
      },
    ],
    active: true,
    name: [
      {
        text: "Michael Smith",
        family: "Smith",
        given: ["Michael"],
      },
    ],
    telecom: [
      {
        system: "phone",
        value: "+49(0)12345-123456",
      },
    ],
    gender: "female",
    birthDate: "2226-10-24",
    address: [
      {
        extension: [
          {
            url: "http://fhir.ufp/StructureDefinition/planet",
            valueString: "Earth",
          },
        ],
        text: "Milchstra\u00dfe 42  76297 Sp\u00f6ck  Deutschland  Planet Erde",
        line: ["Milchstra\u00dfe 42"],
        _line: [
          {
            fhir_comments: [" 0..1 Text representation of the address "],
          },
        ],
        city: "Sp\u00f6ck",
        _city: {
          fhir_comments: [
            " 0..* Street name, number, direction & P.O. Box etc. ",
          ],
        },
        postalCode: "76297",
        _postalCode: {
          fhir_comments: [" 0..1 Name of city, town etc. "],
        },
        country: "Dutschland",
        _country: {
          fhir_comments: [
            " 0..1 Postal code for area ",
            " 0..1 Country (e.g. can be ISO 3166 2 or 3 letter code) ",
          ],
        },
      },
    ],
    maritalStatus: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
          code: "U",
        },
      ],
    },
  },
] as any;
