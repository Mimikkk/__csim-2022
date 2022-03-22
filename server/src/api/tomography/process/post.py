from base64 import b64encode
from io import BytesIO

from imageio import mimsave
from numpy import uint8
from numpy.random import randint
from skimage import img_as_ubyte

from src import app
from src.math import rmse, create_sinogram, inverse_sinogram, create_sinogram_filter, create_sinogram_filter_kernel
from src.utils import img_to_array, square_image
from src.utils.image_conversion import array_to_base64, arrays_to_base64
from .models import TomographyResponse, TomographyRequest
from PIL.ImageOps import grayscale as to_grayscale

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  print(f"Parameters : {item.scans=} {item.detectors=} {item.spread=} {item.use_filter=}")
  grayscale = img_to_array(square_image(to_grayscale(item.image)))

  radius = max(grayscale.shape) // 2

  sinogram = create_sinogram(grayscale, radius, item.scans, item.detectors, item.spread)
  if (item.use_filter):
    kernel = create_sinogram_filter_kernel(item.detectors)
    sinogram = create_sinogram_filter(sinogram, kernel)
  (reconstruction, frames) = inverse_sinogram(sinogram, radius, item.scans, item.detectors, item.spread)

  return TomographyResponse(
    encoded_reconstruction_png=array_to_base64(reconstruction),
    encoded_reconstruction_gif=arrays_to_base64(frames),
    encoded_sinogram_png=array_to_base64(sinogram),
    rmses=[rmse(grayscale, reconstruction)],
    rmse=rmse(grayscale, reconstruction),
  )
