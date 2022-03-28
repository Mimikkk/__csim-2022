from dataclasses import dataclass, astuple

from matplotlib import pyplot as plt

from src import app
from src.app import logger
from src.math import create_sinogram, filter_sinogram, create_sinogram_filter_kernel
from src.utils import image_to_array, square_image
from PIL.ImageOps import grayscale as to_grayscale
from fastapi import Response

from src.utils.image_conversion import base64_to_image, array_to_base64, base64_to_array, rescaled

@dataclass
class SinogramFilterRequest(object):
  original: str

@app.post("/api/tomography/sinogram/filter")
async def filter_sinogram_post(request: SinogramFilterRequest):
  logger.info("Received request to filter sinogram")

  (_, base64) = request.original.split(",")
  sinogram = base64_to_array(base64).astype(float)
  (detectors, _) = sinogram.shape

  kernel = create_sinogram_filter_kernel(detectors // 2)
  sinogram = filter_sinogram(rescaled(sinogram, (0, 1)), kernel)

  return Response(array_to_base64(sinogram), media_type="image/png")
