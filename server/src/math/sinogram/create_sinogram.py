import numpy as np
from numpy.typing import NDArray
from sklearn.preprocessing import normalize

from src.math.consts import tau
from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_detection_positions, calculate_emiter_position
from numpy import array, deg2rad, linspace

def calculate_point(emiter: NDArray, detection: NDArray, original: NDArray) -> float:
  return round(original[tuple(bresenham(emiter, detection).T)].mean())

def create_sinogram(image: np.ndarray[(int,int)], radius: int, scans: int, detectors: int, spread: int) -> NDArray:
  spread = deg2rad(spread)
  image
  sinogram = []
  offset = array((radius, radius))
  for rotation in linspace(0, tau, scans):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
    sinogram.append([calculate_point(emiter, detection, image) for detection in detections.T])

  return normalize(array(sinogram))

# plt.imshow(original, cmap='gray')
# for rotation in linspace(0, tau, scans):
#   emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
#   detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
#   plt.plot(*emiter, 'ro', ms=3)
#   plt.plot(*detections, 'bo', ms=2)
#   for detection in detections.T:
#     plt.plot(*bresenham(emiter, detection).T, 'go', ms=1)
#   break
# plt.show()
