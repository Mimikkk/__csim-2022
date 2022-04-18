from dataclasses import dataclass, astuple

from src import app
from src.app import logger
from src.math import inverse_sinogram, create_sinogram_filter_kernel, filter_sinogram
from src.utils.image_conversion import array_to_media, image_to_array, square_image, \
  arrays_to_media, rescale_array, media_to_array, media_to_image

@dataclass
class ReconstructionRequest(object):
  original: str
  sinogram: str
  scans: int
  spread: int
  detectors: int
  use_filter: bool

@app.post("/api/tomography/reconstruction/reconstruct")
async def reconstruct_image_command(request: ReconstructionRequest):
  (original, sinogram, scans, spread, detectors, use_filter) = astuple(request)
  logger.info("Received request to reconstruct image from sinogram")

  sinogram = media_to_array(sinogram)
  grayscale = image_to_array(square_image(media_to_image(original).convert('L')))
  radius = max(grayscale.shape) // 2

  if (use_filter):
    (detectors, _) = sinogram.shape
    kernel = create_sinogram_filter_kernel(detectors // 2)
    sinogram = filter_sinogram(rescale_array(sinogram, (0, 1)), kernel)

  logger.info("Reconstructing image...")
  (reconstruction, frames, rmse) = inverse_sinogram(sinogram, grayscale, radius, scans, detectors, spread)
  logger.info("Reconstruction complete.")

  return {
    "image": array_to_media(reconstruction),
    "animation": arrays_to_media(frames),
    "rmse": rmse
  }
