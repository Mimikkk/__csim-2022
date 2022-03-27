from dataclasses import dataclass
from io import BytesIO

from fastapi import UploadFile, Response
from matplotlib import pyplot as plt
import pydicom

from src import app
from src.utils import base64_to_img
from src.utils.image_conversion import base64_to_array
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
  pydicom.dcmwrite(buffered := BytesIO(), dicom)
  return Response(buffered.getvalue(), media_type="application/dicom")
