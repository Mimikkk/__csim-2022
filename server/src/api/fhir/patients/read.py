import json

from src import fhir, app, logger
from src.utils import first
AllowedResources = ['Patient', 'Observation', 'MedicationStatement']

def is_patient(x): return x['resourceType'] == 'Patient'
def is_observation(x): return x['resourceType'] == 'Observation'
def is_medication_statement(x): return x['resourceType'] == 'MedicationStatement'

@app.get("/api/fhir/patients/read")
async def patients_read_get(id: str):
  logger.info(f"Reading patient with id: '{id}'...")

  executedata = fhir.execute(f"Patient/{id}/$everything")

  entries = executedata.entry
  entries = [entry.resource for entry in entries if entry.resource.resourceType in AllowedResources]

  x = {
    "patient": first(list(filter(is_patient, entries))),
    "observations": list(filter(is_observation, entries)),
    "medication_statements": list(filter(is_medication_statement, entries))
  }

  print("Had Observations", len(x['observations']) > 0)
  json.dump(x, open(f"search-response.ts", "w"), indent=2)

  return json.dumps({
    "patient": first(list(filter(is_patient, entries))),
    "observations": list(filter(is_observation, entries)),
    "medication_statements": list(filter(is_medication_statement, entries))
  }, indent=2)
