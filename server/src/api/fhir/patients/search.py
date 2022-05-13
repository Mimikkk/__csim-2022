from typing import Literal

from src import fhir, app, logger
from fhirpy.base import SyncSearchSet

Gender = Literal['unknown', 'female', 'male', 'other']

@app.get("/api/fhir/patients/search")
async def patients_search_get(name: str = "", gender: Gender = "", limit: int = 20):
  logger.info(f"Searching for patients with {name}...")

  patients_set: SyncSearchSet = fhir.resources("Patient")
  patients = patients_set.search(name__contains=name, gender=gender).limit(limit).fetch()
  return patients
