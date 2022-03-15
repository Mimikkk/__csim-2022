from numpy import sqrt, mean, square
from numpy.typing import NDArray

def rmse(first: NDArray, second: NDArray) -> float:
  return sqrt(mean(square(first - second)))
