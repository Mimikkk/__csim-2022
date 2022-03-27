from numpy import convolve, ndarray, number

def filter_sinogram(sinogram: ndarray[(int, int), number], kernel: ndarray[(int,), number]) -> \
    ndarray[(int, int), number]:
  sinogram = sinogram.copy()
  for i in range(sinogram.shape[0]):
    sinogram[i, :] = convolve(sinogram[i, :], kernel, mode='same')
  return sinogram
