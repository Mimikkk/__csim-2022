from numpy import zeros, number, ndarray
from sklearn.preprocessing import normalize

from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_emiter_position, calculate_detection_positions
from src.math.consts import tau
from numpy import array, deg2rad, linspace

def inverse_sinogram(sinogram: ndarray[(int, int), number], radius: int, scans: int, detectors: int, spread: float) -> \
    ndarray[(int, int), number]:
  diameter = 2 * radius

  reconstruction = zeros((diameter, diameter))
  offset = array((radius, radius))

  spread = deg2rad(spread)
  for (line, rotation) in zip(sinogram, linspace(0, tau, scans)):
    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)

    for (detection, value) in zip(detections.T, line):
      for point in bresenham(emiter, detection):
        reconstruction[tuple(point)] += value

  return normalize(reconstruction)

# plt.imshow(original, cmap='gray')
# for rotation in np.linspace(0, tau, scans):
#   emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
#   targets = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)
#   plt.plot(*emiter, 'ro', ms=3)
#   plt.plot(*targets, 'bo', ms=2)
#   plt.plot(*bresenham(emiter, targets.T[0]).T, 'go', ms=1)
#   plt.plot(*bresenham(emiter, targets.T[-1]).T, 'go', ms=1)
# plt.show()
