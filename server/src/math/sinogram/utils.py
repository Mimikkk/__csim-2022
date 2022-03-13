from numpy.typing import NDArray
from numpy import array, cos, sin, clip, arange
from src.math.consts import pi

def create_offset(array: NDArray, offset: NDArray) -> NDArray:
  return (array.T + offset).T

def calculate_emiter_position(radius: float, rotation: float) -> NDArray:
  return clip(radius * array([cos(rotation), sin(rotation)]), -radius + 1, radius - 1)

def calculate_detection_positions(radius: float, rotation: float, spread: float, detectors: int) -> NDArray:
  angles = rotation + pi - spread / 2 + arange(detectors) * spread / (detectors - 1)
  return clip(radius * array([cos(angles), sin(angles)]), -radius + 1, radius - 1)

