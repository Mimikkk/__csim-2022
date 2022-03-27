from dataclasses import dataclass

from fastapi import UploadFile
from matplotlib import pyplot as plt

from src import app
from src.utils import base64_to_img
from .models import Patient

@dataclass
class DicomLoadRequest(object):
  image: str
  patient: Patient

@app.post("/api/tomography/dicom/save")
async def dicom_read_post(request: DicomLoadRequest):
  print(request)
  # image = base64_to_img(request.image)
  # plt.imshow(image)
  # plt.show()

  return {

  }
