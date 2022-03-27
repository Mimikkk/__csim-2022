from fastapi import UploadFile

from src import app
from src.math import create_sinogram, inverse_sinogram, filter_sinogram, create_sinogram_filter_kernel
from src.utils import image_to_array, square_image
from src.utils.image_conversion import array_to_base64, arrays_to_base64
from .models import TomographyResponse, TomographyRequest
from PIL.ImageOps import grayscale as to_grayscale

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_post(item: TomographyRequest):
  print(f"Parameters : {item.scans=} {item.detectors=} {item.spread=} {item.use_filter=}")
  grayscale = image_to_array(square_image(to_grayscale(item.image)))

  radius = max(grayscale.shape) // 2

  sinogram = create_sinogram(grayscale, radius, item.scans, item.detectors, item.spread)
  if (item.use_filter):
    kernel = create_sinogram_filter_kernel(item.detectors)
    sinogram = filter_sinogram(sinogram, kernel)
  (reconstruction, frames, rmse) = inverse_sinogram(sinogram, grayscale, radius, item.scans, item.detectors, item.spread)

  return TomographyResponse(
    encoded_reconstruction_png=array_to_base64(reconstruction),
    encoded_reconstruction_gif=arrays_to_base64(frames),
    encoded_sinogram_png=array_to_base64(sinogram),
    rmse=rmse,
  )
