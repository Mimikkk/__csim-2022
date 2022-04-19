from dataclasses import dataclass

from fastapi import Response

from src.app import logger
from src import app

@dataclass
class EyesKnnRequest(object):
  image: str

@app.post("/api/eyes/knn/process")
async def eyes_knn_process_command(request: EyesKnnRequest):
  logger.info("Received request to process image with sampled k-nearest-neighbours method...")
  image = request.image

  return Response(image, media_type="image/png")

