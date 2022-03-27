from fastapi import UploadFile

from src import app

@app.post("/api/tomography/dicom/read")
async def dicom_read_post(item: UploadFile):
  pass
