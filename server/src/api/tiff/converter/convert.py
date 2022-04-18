from fastapi import UploadFile

from src import app

@app.post("/api/tiff/convert")
async def convert_tiff_post(request: UploadFile):
  pass
