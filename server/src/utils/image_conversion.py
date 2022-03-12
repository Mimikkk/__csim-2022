from base64 import b64encode, b64decode

from PIL.Image import Image, open, new
from PIL import UnidentifiedImageError
from io import BytesIO
from numpy.typing import NDArray
from numpy import array

def img_to_base64(image: Image) -> str:
  image.save(buffered := BytesIO(), format="PNG")
  return f"data:image/png;base64,{str(b64encode(buffered.getvalue()), 'utf-8')}"

def base64_to_img(base64: str) -> Image:
  try:
    return open(BytesIO(b64decode(base64)))
  except UnidentifiedImageError:
    return new("RGB", (1, 1))

def img_to_array(image: Image) -> NDArray:
  # noinspection PyTypeChecker
  return array(image)
