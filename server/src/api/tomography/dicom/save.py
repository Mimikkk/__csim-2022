from fastapi import UploadFile

from src import app

@app.post("/api/tomography/dicom/save")
async def dicom_read_post(item: UploadFile):
  pass
