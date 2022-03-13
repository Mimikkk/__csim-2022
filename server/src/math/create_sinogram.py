from typing import Tuple

import PIL
from PIL.Image import Image, fromarray
from PIL.ImageOps import grayscale as to_grayscale
from matplotlib import pyplot as plt
import numpy as np
from numpy.typing import NDArray

from src.math.bresenham import bresenham
from src.utils import img_to_array, square_image
from numpy import square, mod, pi, array, cos, sin, ndarray, flip, sum, subtract, clip, rad2deg, deg2rad, arange, \
  convolve
tau = 2 * pi
def create_filter_kernel() -> NDArray:
  h0 = 1
  h = [-4 / square(pi * k) if mod(k, 2) else 0 for k in range(20)]
  return array([*h[::-1], h0, *h])

# TODO - filtering
def filter_sinogram(sinogram: NDArray, kernel: NDArray) -> NDArray:
  return array([convolve(line, kernel, mode='same') for line in sinogram])

def create_offset(array: NDArray, offset: NDArray) -> NDArray:
  return (array.T + offset).T

def calculate_emiter_position(radius: float, rotation: float) -> NDArray:
  return clip(radius * array([cos(rotation), sin(rotation)]), -radius + 1, radius - 1)

def calculate_detection_positions(radius: float, rotation: float, spread: float, detectors: int) -> NDArray:
  angles = rotation + pi - spread / 2 + arange(detectors) * spread / (detectors - 1)
  return clip(radius * array([cos(angles), sin(angles)]), -radius + 1, radius - 1)

def calculate_sinogram_point(emiter: NDArray, target: NDArray, original: NDArray) -> float:
  return round(original[tuple(bresenham(emiter, target).T)].mean())

def create_sinogram(image: Image, scans: int, detectors: int, spread: float, use_filter: bool) -> Image:
  print(f"Parameters {scans=} {detectors=} {spread=} {use_filter=}")
  original = img_to_array(square_image(to_grayscale(image)))
  radius = max(original.shape) // 2
  spread = deg2rad(spread)

  offset = array(original.shape) // 2
  sinogram = []
  for rotation in np.linspace(0, tau, scans):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    targets = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
    sinogram.append([calculate_sinogram_point(emiter, target, original) for target in targets.T])

  # TODO - filtering
  if (use_filter):
    kernel = create_filter_kernel()
    sinogram = filter_sinogram(array(sinogram), kernel)


  return fromarray(array(sinogram), 'L').convert("RGBA")
