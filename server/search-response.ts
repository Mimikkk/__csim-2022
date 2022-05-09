const mockSearchResponse = {
  patient: {
    resourceType: "Patient",
    id: "1293107",
    meta: {
      versionId: "1",
      lastUpdated: "2020-07-02T09:22:28.015+00:00",
      source: "#7buuAP9WCMgn6WOc",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Test123 <b>TEST123 </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>Test123.test</td></tr><tr><td>Date of birth</td><td><span>29 June 2000</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        system: "http://clinfhir.com/fhir/NamingSystem/identifier",
        value: "Test123.test",
      },
    ],
    name: [
      {
        use: "official",
        family: "Test123",
        given: ["Test123"],
      },
    ],
    telecom: [
      {
        value: "(03) 5555 6472",
      },
    ],
    gender: "male",
    birthDate: "2000-06-29",
  },
  observations: [],
  medication_statements: [],
};
