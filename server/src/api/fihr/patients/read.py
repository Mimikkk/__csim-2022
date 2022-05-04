from fhirpy.base import SyncSearchSet

from src import fihr, app, logger
from src.utils import first

@app.post("/api/fihr/patients/read")
async def patients_read_get(id: str):
  logger.info(f"Reading patient with id: '{id}'...")

  searchset: SyncSearchSet = fihr.resource("Patient")

  return first(searchset.search(_id=id).fetch())
