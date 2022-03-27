from dataclasses import dataclass
from fastapi import Response
from src import app
from src.utils.image_conversion import base64_to_array, dicom_to_bytes
from .models import Patient
from .utils import array_to_dicom

@dataclass
class DicomLoadRequest(object):
  image: str
  patient: Patient

@app.post("/api/tomography/dicom/save")
async def dicom_read_post(request: DicomLoadRequest):
  patient = request.patient
  (mime, base64) = request.image.split(",")

  image = base64_to_array(base64)
  dicom = array_to_dicom(image, patient)

  return Response(dicom_to_bytes(dicom), media_type="application/dicom")
