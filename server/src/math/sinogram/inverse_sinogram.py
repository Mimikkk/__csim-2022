from numpy import linspace, zeros, deg2rad, clip

from PIL.Image import Image, fromarray
from PIL.ImageOps import grayscale as to_grayscale
from matplotlib import pyplot as plt
import numpy as np

from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_emiter_position, calculate_detection_positions
from src.utils import img_to_array
from numpy import array
from src.math.consts import tau

def inverse_sinogram(sinogram: Image, radius: int, scans: int, detectors: int, spread: float) -> Image:
  sinogram = img_to_array(to_grayscale(sinogram))
  plt.imshow(sinogram, cmap='gray')

  diameter = 2 * radius
  reconstruction = zeros((diameter, diameter), dtype=np.int8)
  offset = array(reconstruction.shape) // 2

  spread = deg2rad(spread)
  for (line, rotation) in zip(sinogram, linspace(0, tau, scans)):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)

    for (detection, value) in zip(detections.T, line):
      for point in bresenham(emiter, detection):
        reconstruction[tuple(point)] += clip(value, 0, 255)
    break

  plt.imshow(reconstruction, cmap='gray')
  plt.show()

  # plt.imshow(original, cmap='gray')
  # for rotation in np.linspace(0, tau, scans):
  #   emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
  #   targets = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
  #   plt.plot(*emiter, 'ro', ms=3)
  #   plt.plot(*targets, 'bo', ms=2)
  #   plt.plot(*bresenham(emiter, targets.T[0]).T, 'go', ms=1)
  #   plt.plot(*bresenham(emiter, targets.T[-1]).T, 'go', ms=1)
  # plt.show()

  return fromarray(reconstruction, 'L').convert("RGBA")
