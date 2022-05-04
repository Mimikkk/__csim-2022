from fhirpy.base import SyncSearchSet

from src import fhir, app, logger
from src.utils import first

@app.post("/api/fhir/patients/read")
async def patients_read_get(id: str):
  logger.info(f"Reading patient with id: '{id}'...")

  searchset: SyncSearchSet = fhir.resource("Patient")

  return first(searchset.search(_id=id).fetch())
