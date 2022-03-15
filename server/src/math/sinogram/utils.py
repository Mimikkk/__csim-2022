from typing import TypeVar

from numpy import array, cos, sin, clip, arange, ndarray, number
from src.math.consts import pi

Shape = TypeVar('Shape')
def create_offset(array: ndarray[Shape, number], offset: ndarray[Shape, number]) -> ndarray[Shape, number]:
  return (array.T + offset).T

def calculate_emiter_position(radius: float, rotation: float) -> ndarray[(1, 2), number]:
  return clip(radius * array([cos(rotation), sin(rotation)]), -radius + 1, radius - 1)

def calculate_detection_positions(radius: float, rotation: float, spread: float, detectors: int) -> \
    ndarray[(int, 2), number]:
  angles = rotation + pi - spread / 2 + arange(detectors) * spread / (detectors - 1)
  return clip(radius * array([cos(angles), sin(angles)]), -radius + 1, radius - 1)
