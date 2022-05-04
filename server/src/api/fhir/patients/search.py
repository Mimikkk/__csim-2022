from typing import Literal

from src import fhir, app
from fhirpy.base import SyncSearchSet

Gender = Literal['unknown', 'female', 'male', 'other']

@app.get("/api/fhir/patients/search")
async def patients_search_get(name: str = "", gender: Gender = "", limit: int = 10):
  searchset: SyncSearchSet = fhir.resources("Patient")

  patients = searchset.search(name__contains=name, gender=gender).limit(limit).fetch()

  return patients
