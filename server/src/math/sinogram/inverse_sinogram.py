from numpy import zeros, number, ndarray
from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_emiter_position, calculate_detection_positions
from src.math.consts import tau
from numpy import array, deg2rad, linspace

def inverse_sinogram(sinogram: ndarray[(int, int), number], radius: int, scans: int, detectors: int, spread: float) -> \
    (ndarray[(int, int), number], ndarray[(int, int, int), number]):
  diameter = 2 * radius

  reconstruction = zeros((diameter, diameter))
  offset = array((radius, radius))

  animation = zeros((scans, diameter, diameter))

  spread = deg2rad(spread)
  for (i, (line, rotation)) in enumerate(zip(sinogram, linspace(0, tau, scans))):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)

    for (detection, value) in zip(detections.T, line):
      for point in bresenham(emiter, detection):
        reconstruction[tuple(point)] += value
    animation[i, :, :] = reconstruction
  return (reconstruction, animation)
