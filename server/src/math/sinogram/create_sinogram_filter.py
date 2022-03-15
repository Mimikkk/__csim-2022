from numpy.typing import NDArray
from numpy import convolve

def create_sinogram_filter(sinogram: NDArray, kernel: NDArray) -> NDArray:
  sinogram = sinogram.copy()
  for i in range(sinogram.shape[0]):
    sinogram[i, :] = convolve(sinogram[i, :], kernel, mode='same')
  return sinogram
