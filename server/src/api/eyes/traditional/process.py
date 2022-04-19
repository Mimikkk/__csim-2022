from dataclasses import dataclass

from fastapi import Response

from src.app import logger
from src import app

@dataclass
class EyesTraditionalRequest(object):
  image: str

@app.post("/api/eyes/traditional/process")
async def eyes_traditional_process_command(request: EyesTraditionalRequest):
  logger.info("Received request to process image with traditional methods...")
  image = request.image

  return Response(image, media_type="image/png")
