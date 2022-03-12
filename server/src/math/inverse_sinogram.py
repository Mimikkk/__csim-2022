from PIL.Image import Image, fromarray
from PIL.ImageOps import grayscale as to_grayscale

from src.utils import img_to_array


def inverse_sinogram(sinogram: Image, scans: int, detectors: int, angle: float, use_filter: bool) -> Image:
  grayscale = img_to_array(to_grayscale(sinogram))
  return fromarray(grayscale, 'L').convert("RGBA")

