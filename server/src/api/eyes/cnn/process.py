from dataclasses import dataclass

from fastapi import Response

from src.app import logger
from src import app

@dataclass
class EyesCnnRequest(object):
  image: str

@app.post("/api/eyes/cnn/process")
async def eyes_cnn_process_command(request: EyesCnnRequest):
  logger.info("Received request to process image with convolutional neural network method...")
  image = request.image

  return Response(image, media_type="image/png")
