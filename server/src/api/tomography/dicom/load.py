from fastapi import UploadFile

from src import app

@app.post("/api/tomography/dicom/load")
async def dicom_load_post(item: UploadFile):
  print(item)
  pass
