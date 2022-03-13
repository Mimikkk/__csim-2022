from PIL.Image import Image, fromarray
from PIL.ImageOps import grayscale as to_grayscale
import numpy as np
from numpy.typing import NDArray

from src.math.consts import tau
from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_detection_positions, calculate_emiter_position
from src.utils import img_to_array, square_image
from numpy import square, mod, pi, array, convolve, deg2rad

def create_filter_kernel() -> NDArray:
  h0 = 1
  h = [-4 / square(pi * k) if mod(k, 2) else 0 for k in range(20)]
  return array([*h[::-1], h0, *h])

def filter_sinogram(sinogram: NDArray, kernel: NDArray) -> NDArray:
  for i in range(sinogram.shape[0]):
    sinogram[i, :] = convolve(sinogram[i, :], kernel, mode='same')
  return sinogram

def calculate_sinogram_point(emiter: NDArray, detection: NDArray, original: NDArray) -> float:
  return round(original[tuple(bresenham(emiter, detection).T)].mean())

def create_sinogram(image: Image, scans: int, detectors: int, spread: float, use_filter: bool) -> (Image, int):
  print(f"Parameters {scans=} {detectors=} {spread=} {use_filter=}")
  original = img_to_array(square_image(to_grayscale(image)))
  radius = max(original.shape) // 2
  spread = deg2rad(spread)

  offset = array(original.shape) // 2

  sinogram = []
  for rotation in np.linspace(0, tau, scans):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
    sinogram.append([calculate_sinogram_point(emiter, detection, original) for detection in detections.T])
  sinogram = array(sinogram, dtype=np.int8)

  if (use_filter):
    kernel = create_filter_kernel()
    sinogram = filter_sinogram(sinogram, kernel)

  return (fromarray(sinogram, 'L').convert("RGBA"), radius)
