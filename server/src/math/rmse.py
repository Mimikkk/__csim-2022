from typing import TypeVar

from numpy import sqrt, mean, square, number, ndarray

Shape = TypeVar('Shape')
def rmse(first: ndarray[Shape, number], second: ndarray[Shape, number]) -> number:
  return sqrt(mean(square(first - second)))
