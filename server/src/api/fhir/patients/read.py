import datetime
import json

from fhirpy.base import SyncSearchSet

from src import fhir, app, logger

@app.get("/api/fhir/patients/read")
async def patients_read_get(id: str):
  logger.info(f"Reading patient with id: '{id}'...")

  patient_set: SyncSearchSet = fhir.resources("Patient")
  patient = patient_set.get(id)
  logger.info(f"Read patient!")

  logger.info(f"Reading patient's observations...")
  observation_set: SyncSearchSet = fhir.resources("Observation")
  observations = observation_set.search(subject=id).fetch_all()

  def asc_date(observation):
    if ('issued' in observation):
      return datetime.datetime.fromisoformat(observation.issued)
    if ('effectiveDateTime' in observation):
      return datetime.datetime.fromisoformat(observation.effectiveDateTime)
    return 0
  observations.sort(key=asc_date)

  logger.info(f"Read total {len(observations)} observations!")

  logger.info(f"Reading patient's medication statements...")
  medication_statements_set: SyncSearchSet = fhir.resources("MedicationStatement")
  medication_statements = medication_statements_set.search(subject=id).fetch_all()
  logger.info(f"Read total {len(medication_statements)} medication statements!")

  return {
    "patient": patient,
    "observations": observations,
    "medicationStatements": medication_statements,
  }
