from numpy import square, mod, pi, array, number, ndarray

def create_sinogram_filter_kernel(size: int) -> ndarray[(int,), number]:
  h0 = 1
  h = [-4 / square(pi * k) if mod(k, 2) else 0 for k in range(size // 2 - 1)]
  return array([*h[::-1], h0, *h])
