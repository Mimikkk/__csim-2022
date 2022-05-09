{
  "patient": {
    "resourceType": "Patient",
    "id": "2382578",
    "meta": {
      "versionId": "1",
      "lastUpdated": "2021-07-04T12:07:25.928+00:00",
      "source": "#td7pO4cCDUnFZcFO"
    },
    "text": {
      "status": "generated",
      "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Ms Elle G <b>William </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>628-01-9633</td></tr><tr><td>Address</td><td><span>2168 Grey Fox Farm Road </span><br/><span>Houston </span><span>TX </span></td></tr><tr><td>Date of birth</td><td><span>29 May 1978</span></td></tr></tbody></table></div>"
    },
    "extension": [
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
        "extension": [
          {
            "url": "ombCategory",
            "valueCoding": {
              "system": "urn:oid:2.16.840.1.113883.6.238",
              "code": "2076-8",
              "display": "Native Hawaiian or Other Pacific Islander"
            }
          },
          {
            "url": "text",
            "valueString": "White"
          }
        ]
      },
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
        "extension": [
          {
            "url": "ombCategory",
            "valueCoding": {
              "system": "urn:oid:2.16.840.1.113883.6.238",
              "code": "2135-2",
              "display": "Hispanic or Latino"
            }
          },
          {
            "url": "text",
            "valueString": "Hispanic or Latino"
          }
        ]
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/patient-mothersMaidenName",
        "valueString": "test4"
      },
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
        "valueCode": "F"
      }
    ],
    "identifier": [
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "SS",
              "display": "Social Security number"
            }
          ]
        },
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "value": "824-01-9800"
      },
      {
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
              "code": "DL",
              "display": "Driver's license number"
            }
          ]
        },
        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
        "value": "S98523200"
      }
    ],
    "active": true,
    "name": [
      {
        "family": "Abhinay",
        "given": [
          "Harshitha",
          "A"
        ],
        "prefix": [
          "Ms"
        ]
      }
    ],
    "telecom": [
      {
        "system": "phone",
        "value": "281-744-9000",
        "use": "home"
      },
      {
        "system": "phone",
        "value": "7656787700",
        "use": "mobile"
      }
    ],
    "gender": "female",
    "birthDate": "1979-05-14",
    "address": [
      {
        "line": [
          "159 UUU"
        ],
        "city": "Northern",
        "state": "BD",
        "postalCode": "77070"
      }
    ],
    "multipleBirthInteger": 1
  },
  "observations": [],
  "medication_statements": []
}