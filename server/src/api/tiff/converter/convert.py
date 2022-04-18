from fastapi import UploadFile, Response
from src.app import logger
from src import app
from PIL import Image

from src.utils import image_to_media

@app.post("/api/tiff/convert")
async def convert_tiff_command(file: UploadFile):
  logger.info("Converting tiff file...")

  return Response(
    image_to_media(Image.open(file.file)),
    media_type="image/png"
  )
