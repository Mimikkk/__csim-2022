from dataclasses import dataclass, astuple

from src import app
from src.app import logger
from src.math import create_sinogram
from src.utils import image_to_array, square_image
from PIL.ImageOps import grayscale as to_grayscale
from fastapi import Response

from src.utils.image_conversion import array_to_media, media_to_image

@dataclass
class CreateSinogramRequest(object):
  original: str
  detectors: int
  spread: int
  scans: int

@app.post("/api/tomography/sinogram/create")
async def create_sinogram_post(request: CreateSinogramRequest):
  logger.info("Received request to create sinogram")

  (original, detectors, spread, scans) = astuple(request)

  logger.info("Converting image to array")
  grayscale = image_to_array(square_image(to_grayscale(media_to_image(original))))
  radius = max(grayscale.shape) // 2

  logger.info("Creating sinogram")
  sinogram = create_sinogram(grayscale, radius, scans, detectors, spread)

  return Response(array_to_media(sinogram), media_type="image/png")
