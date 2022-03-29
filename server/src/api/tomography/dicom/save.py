from dataclasses import dataclass, astuple
from fastapi import Response
from src import app
from src.app import logger
from src.utils.image_conversion import dicom_to_bytes, media_to_array
from .models import Patient
from .utils import array_to_dicom

@dataclass
class DicomLoadRequest(object):
  image: str
  patient: Patient

@app.post("/api/tomography/dicom/save")
async def dicom_read_post(request: DicomLoadRequest):
  logger.info("Received request to save contents as a dicom file")
  image = request.image
  patient = request.patient

  print(patient)
  return Response(
    dicom_to_bytes(array_to_dicom(media_to_array(image), patient)),
    media_type="application/dicom"
  )
