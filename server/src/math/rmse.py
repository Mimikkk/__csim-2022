from typing import TypeVar

from numpy import sqrt, mean, square, number, ndarray

from src.utils.image_conversion import rescale_array

Shape = TypeVar('Shape')
def rmse(first: ndarray[Shape, number], second: ndarray[Shape, number]) -> number:
  return sqrt(mean(square(rescale_array(second, (0, 1)) - rescale_array(first, (0, 1)))))
