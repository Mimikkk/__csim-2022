from typing import Any
from PIL.Image import fromarray
from numpy import ndarray, around, clip
import numpy as np
from sklearn.preprocessing import normalize

from src import app
from src.math import rmse, create_sinogram, inverse_sinogram, create_sinogram_filter, create_sinogram_filter_kernel
from src.utils import img_to_base64, img_to_array, square_image
from .models import TomographyResponse, TomographyRequest
from PIL.ImageOps import grayscale as to_grayscale

def clip_array(arr: ndarray[(Any, Any), int], feature_range: (float, float)) -> ndarray[(Any, Any), int]:
  return clip(around(arr / arr.max(initial=None) * 255), *feature_range)

def array_to_base64(arr: ndarray[(Any, Any), int]) -> str:
  return img_to_base64(fromarray(arr.astype(np.int8), 'L').convert("RGBA"))

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  print(f"Parameters : {item.scans=} {item.detectors=} {item.spread=} {item.use_filter=}")
  grayscale = img_to_array(square_image(to_grayscale(item.image)))

  radius = max(grayscale.shape) // 2
  sinogram = create_sinogram(grayscale, radius, item.scans, item.detectors, item.spread)
  if (item.use_filter):
    kernel = create_sinogram_filter_kernel(item.detectors)
    sinogram = create_sinogram_filter(sinogram, kernel)
  reconstruction = inverse_sinogram(sinogram, radius, item.scans, item.detectors, item.spread)

  return TomographyResponse(
    array_to_base64(clip_array(reconstruction, (0, 255))),
    array_to_base64(sinogram),
    rmse(grayscale, reconstruction)
  )
