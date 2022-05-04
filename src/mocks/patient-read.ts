const searchResponse = {
  patient: {
    resourceType: "Patient",
    id: "1207339",
    meta: {
      versionId: "1",
      lastUpdated: "2020-06-16T08:17:51.415+00:00",
      source: "#t8pWBEFuHjPQyNjL",
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><div class="hapiHeaderText">Alexdaner <b>SPASS </b></div><table class="hapiPropertyTable"><tbody><tr><td>Identifier</td><td>lnr-00001099</td></tr><tr><td>Date of birth</td><td><span>06 July 1988</span></td></tr></tbody></table></div>',
    },
    identifier: [
      {
        system:
          "http://www.onkologie-freising.com/identifiers/codesystems/melos-Lebensnummer",
        value: "lnr-00001099",
      },
    ],
    name: [
      {
        family: "Spa\u00df",
        given: ["Alexdaner"],
      },
    ],
    gender: "female",
    birthDate: "1988-07-06",
  },
  observations: [],
  medication_statements: [],
};
