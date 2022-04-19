from dataclasses import dataclass

from fastapi import Response

from src.app import logger
from src import app
from src.utils import image_to_media

@dataclass
class EyesTraditionalRequest(object):
  image: str

@app.post("/api/eyes/knn/process")
async def eyes_knn_process_command(request: EyesTraditionalRequest):
  logger.info("Received request to process image with sampled k-nearest-neighbours method...")
  image = request.image

  return Response(
    image_to_media(image),
    media_type="image/png"
  )
