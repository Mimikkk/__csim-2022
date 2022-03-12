from typing import Tuple

import PIL
from PIL.Image import Image, fromarray
from PIL.ImageOps import grayscale as to_grayscale
from matplotlib import pyplot as plt
import numpy as np
from numpy.typing import NDArray

from src.math.bresenham import bresenham
from src.utils import img_to_array, square_image
from numpy import square, mod, pi, array, cos, sin, ndarray, flip, subtract, clip, rad2deg, deg2rad, arange
tau = 2 * pi
def create_filter_kernel() -> NDArray:
  h0 = 1
  h = [-4 / square(pi * k) if mod(k, 2) else 0 for k in range(20)]
  return array([*h[::-1], h0, *h])

def filter_sinogram(sinogram: NDArray, kernel: NDArray) -> NDArray:
  return np.convolve(sinogram, kernel, mode='same')

def create_offset(array: NDArray, offset: NDArray) -> NDArray:
  return (array.T + offset).T

def calculate_emiter_position(radius: float, rotation: float) -> NDArray:
  return clip(radius * array([cos(rotation), sin(rotation)]), -radius + 1, radius - 1)

def calculate_detection_positions(radius: float, rotation: float, spread: float, detectors: int) -> NDArray:
  angles = rotation + pi - spread / 2 + arange(detectors) * spread / (detectors - 1)
  return clip(radius * array([cos(angles), sin(angles)]), -radius + 1, radius - 1)

def create_sinogram(image: Image, scans: int, detectors: int, spread: float, use_filter: bool) -> Image:
  print(f"Parameters {scans=} {detectors=} {spread=} {use_filter=}")
  grayscale = img_to_array(square_image(to_grayscale(image)))
  radius = max(grayscale.shape) // 2

  plt.imshow(grayscale, cmap='gray')
  spread = deg2rad(spread)

  offset = array(grayscale.shape) // 2
  for rotation in np.linspace(0, tau, scans):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    targets = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)

    plt.plot(*emiter, 'ro', ms=3)
    plt.plot(*targets, 'bo', ms=2)
    plt.plot(*bresenham(emiter, targets.T[0]).T, 'go', ms=1)
    plt.plot(*bresenham(emiter, targets.T[-1]).T, 'go', ms=1)
    break
  plt.show()
  sinogram = np.zeros((scans, detectors))

  if (use_filter):
    kernel = create_filter_kernel()
    sinogram = filter_sinogram(sinogram, kernel)

  return fromarray(sinogram, 'L').convert("RGBA")
