from dataclasses import dataclass

from fastapi import UploadFile
from pydicom import FileDataset
import pydicom as pd
from src import app
from .models import Patient
from src.utils.image_conversion import dicom_to_base64

@dataclass
class DicomLoadResponse(object):
  image: str
  patient: Patient

@app.post("/api/tomography/dicom/load", response_model=DicomLoadResponse)
async def dicom_load_post(file: UploadFile):
  dicom: FileDataset = pd.dcmread(file.file, force=True)

  return {
    "image": dicom_to_base64(dicom),
    "patient": {
      "name": dicom.PatientName.original_string,
      "id": dicom.PatientID,
      "comments": dicom.ImageComments
    }
  }
