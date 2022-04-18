from dataclasses import dataclass

from fastapi import UploadFile
from pydicom import FileDataset, dcmread
from src import app
from src.app import logger
from .models import Patient
from src.utils.image_conversion import dicom_to_media

@dataclass
class DicomLoadResponse(object):
  image: str
  patient: Patient

@app.post("/api/tomography/dicom/read", response_model=DicomLoadResponse)
async def dicom_load_command(file: UploadFile):
  logger.info("Received request to read contents from dicom file")
  dicom: FileDataset = dcmread(file.file, force=True)

  return {
    "image": dicom_to_media(dicom),
    "patient": {
      "name": dicom.PatientName.original_string,
      "id": dicom.PatientID,
      "comments": dicom.ImageComments
    }
  }
