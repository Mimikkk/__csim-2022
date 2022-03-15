from PIL.Image import fromarray
import matplotlib.pyplot as plt
from numpy import array
import numpy as np

from src import app
from src.math import rmse, create_sinogram, inverse_sinogram, create_sinogram_filter, create_sinogram_filter_kernel
from src.utils import img_to_base64, img_to_array, square_image
from .models import TomographyResponse, TomographyRequest
from PIL.ImageOps import grayscale as to_grayscale

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  print(f"Parameters : {item.scans=} {item.detectors} {item.spread=} {item.use_filter=}")
  original = item.image

  grayscale = img_to_array(square_image(to_grayscale(original)))
  print(f"Image Size : {grayscale.shape}")

  radius = max(grayscale.shape) // 2

  print("Creating sinogram...")
  sinogram = create_sinogram(grayscale, radius, item.scans, item.detectors, item.spread)
  print("Created sinogram.")

  plt.imshow(sinogram, cmap='gray')
  plt.show()

  print("Creating sinogram filter...")
  kernel = create_sinogram_filter_kernel(item.detectors)
  sinogram_filter = create_sinogram_filter(sinogram, kernel)
  print("Created sinogram filter.")

  plt.imshow(sinogram_filter, cmap='gray')
  plt.show()

  print("Inverting sinogram...")
  reconstruction = inverse_sinogram(sinogram, radius, item.scans, item.detectors, item.spread)
  print("Inverted sinogram.")

  plt.imshow(reconstruction, cmap='gray')
  plt.show()

  print("Inverting sinogram_filter...")
  reconstruction = inverse_sinogram(sinogram_filter, radius, item.scans, item.detectors, item.spread)
  print("Inverted sinogram_filter.")

  plt.imshow(reconstruction, cmap='gray')
  plt.show()

  s = fromarray(array(sinogram, np.int8), 'L').convert("RGBA")
  r = fromarray(array(reconstruction, np.int8), 'L').convert("RGBA")
  return TomographyResponse(
    img_to_base64(r),
    img_to_base64(s),
    rmse(grayscale, reconstruction)
  )
