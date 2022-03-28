from dataclasses import dataclass, astuple

from PIL.ImageOps import grayscale as to_grayscale

from src import app
from src.app import logger
from src.math import inverse_sinogram, create_sinogram_filter_kernel, filter_sinogram
from src.utils.image_conversion import array_to_base64, base64_to_array, base64_to_image, image_to_array, square_image, \
  arrays_to_base64, rescaled

@dataclass
class ReconstructionRequest(object):
  original: str
  sinogram: str
  scans: int
  spread: int
  detectors: int
  use_filter: bool

@app.post("/api/tomography/reconstruction/reconstruct")
async def reconstruct_image_post(request: ReconstructionRequest):
  logger.info("Received request to reconstruct image from sinogram")

  (original, sinogram, scans, spread, detectors, use_filter) = astuple(request)
  (_, base64) = sinogram.split(",")
  sinogram = base64_to_array(base64)
  (_, base64) = original.split(",")
  grayscale = image_to_array(square_image(to_grayscale(base64_to_image(base64))))
  radius = max(grayscale.shape) // 2

  if (use_filter):
    (detectors, _) = sinogram.shape
    kernel = create_sinogram_filter_kernel(detectors // 2)
    sinogram = filter_sinogram(rescaled(sinogram, (0, 1)), kernel)

  logger.info("Reconstructing image...")
  (reconstruction, frames, rmse) = inverse_sinogram(sinogram, grayscale, radius, scans, detectors, spread)
  logger.info("Reconstruction complete.")

  return {
    "image": array_to_base64(reconstruction),
    "animation": arrays_to_base64(frames),
    "rmse": rmse
  }
