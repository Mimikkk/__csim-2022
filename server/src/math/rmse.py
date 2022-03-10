from numpy import sqrt, mean, square
from numpy.typing import NDArray

def rmse(first: NDArray[float | int], second: NDArray[float | int]) -> float:
  return sqrt(mean(square(first - second)))
