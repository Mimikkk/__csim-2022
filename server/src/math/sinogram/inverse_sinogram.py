from numpy import zeros, number, ndarray

from src.app import logger
from src.math.rmse import rmse
from src.math.bresenham import bresenham
from src.math.sinogram.utils import create_offset, calculate_emiter_position, calculate_detection_positions
from src.math.consts import tau
from numpy import array, deg2rad, linspace

from src.utils.image_conversion import image_to_array, rescale_array

from PIL import Image
from PIL import ImageDraw

def inverse_sinogram(sinogram: ndarray[(int, int), number], grayscale: ndarray[(int, int), number],
                     radius: int, scans: int, detectors: int, spread: float) -> \
    (ndarray[(int, int), number], ndarray[(int, int, int), number], float):
  diameter = 2 * radius

  reconstruction = zeros((diameter, diameter))
  offset = array((radius, radius))

  animation = zeros((scans, diameter, diameter))

  spread = deg2rad(spread)

  for (i, (line, rotation)) in enumerate(zip(sinogram, linspace(0, tau, scans))):
    if (i % 10 == 0): logger.info(f"Processing line {i} of {scans}")

    emiter = create_offset(calculate_emiter_position(radius, rotation), offset)
    detections = create_offset(calculate_detection_positions(radius, rotation, spread, detectors), offset)

    for (detection, value) in zip(detections.T, line):
      for point in bresenham(emiter, detection):
        reconstruction[tuple(point)] += value

    image = Image.fromarray(rescale_array(reconstruction))
    context = ImageDraw.Draw(image)
    context.text((6, 6), f"RMSE: {rmse(rescale_array(grayscale), reconstruction):.2f}", fill=200)
    animation[i, :, :] = image_to_array(image)

  return (rescale_array(reconstruction), animation, rmse(grayscale, reconstruction))
