from dataclasses import dataclass, astuple

from src import app
from src.math import create_sinogram
from src.utils import image_to_array, square_image
from PIL.ImageOps import grayscale as to_grayscale
from fastapi import Response

from src.utils.image_conversion import base64_to_image, array_to_base64

@dataclass
class CreateSinogramRequest(object):
  original: str
  detectors: int
  spread: int
  scans: int

@app.post("/api/tomography/sinogram/create")
async def create_sinogram_post(request: CreateSinogramRequest):
  (original, detectors, spread, scans) = astuple(request)
  print(f"Parameters : {scans=} {detectors=} {spread=}")
  (_, base64) = original.split(",")

  grayscale = image_to_array(square_image(to_grayscale(base64_to_image(base64))))
  radius = max(grayscale.shape) // 2
  sinogram = create_sinogram(grayscale, radius, scans, detectors, spread)

  return Response(array_to_base64(sinogram), media_type="image/png")
