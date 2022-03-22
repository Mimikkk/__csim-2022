from base64 import b64encode, b64decode
from typing import Any

from PIL.Image import Image, open, new
from PIL import UnidentifiedImageError
from io import BytesIO

from imageio import imwrite
from numpy import array, subtract, ndarray, number, interp, uint8

def bytes_to_base64(bytes: bytes) -> str:
  return f"data:image/png;base64,{str(b64encode(bytes), 'utf-8')}"

def img_to_base64(image: Image) -> str:
  image.save(buffered := BytesIO(), format="PNG")
  return bytes_to_base64(buffered.getvalue())

def array_to_base64(arr: ndarray[(Any, Any, Any), int]) -> str:
  arr = arr / arr.max(initial=None)
  ranges = (arr.min(initial=None), arr.max(initial=None))
  imwrite(buffered := BytesIO(), interp(arr, ranges, (0, 255)).astype(uint8), format='png')
  return bytes_to_base64(buffered.getvalue())

def base64_to_img(base64: str) -> Image:
  try:
    return open(BytesIO(b64decode(base64)))
  except UnidentifiedImageError:
    return new("RGBA", (1, 1))

def img_to_array(image: Image) -> ndarray[((Any, Any), Any), number]:
  # noinspection PyTypeChecker
  return array(image)

def square_image(image: Image) -> Image:
  (width, height) = image.size
  difference = abs(subtract(*image.size))
  offset = (0, difference // 2) if (width > height) else (difference // 2, 0)

  size = max(image.size)
  # noinspection PyTypeChecker
  augmented = new(image.mode, (size, size), (0,))
  augmented.paste(image, offset)
  return augmented
