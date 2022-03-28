from base64 import b64encode, b64decode
from typing import Any

from PIL.Image import Image, open, new
from PIL import UnidentifiedImageError
from io import BytesIO

from imageio import imwrite
from numpy import array, subtract, ndarray, number, interp, uint8
from imageio import mimsave
from pydicom import FileDataset, dcmwrite

def rescale_array(arr: ndarray[Any, number], feature=(0, 255)) -> ndarray[Any, uint8]:
  ranges = (arr.min(initial=None), arr.max(initial=None))
  return interp(arr, ranges, feature)

def square_image(image: Image) -> Image:
  (width, height) = image.size
  difference = abs(subtract(*image.size))
  offset = (0, (difference - 1) // 2) if (width > height) else ((difference - 1) // 2, 0)

  size = max_ - 1 if (max_ := max(image.size)) % 2 else max_
  # noinspection PyTypeChecker
  augmented = new(image.mode, (size, size), (0,))
  augmented.paste(image, offset)
  return augmented

def bytesio_to_media(bytes: BytesIO, format: str) -> str:
  return f"data:image/{format};base64,{b64encode(bytes.getvalue()).decode('utf-8')}"

def image_to_media(image: Image) -> str:
  image.save(buffered := BytesIO(), format="png")
  return bytesio_to_media(buffered, "png")

def image_to_array(image: Image) -> ndarray[((Any, Any), Any), number]:
  # noinspection PyTypeChecker
  return array(image)

def array_to_bytes(arr: ndarray[(Any, Any), int]) -> bytes:
  imwrite(buffered := BytesIO(), rescale_array(arr).astype(uint8), format='png')
  return buffered.getvalue()

def array_to_media(arr: ndarray[(Any, Any, Any), number]) -> str:
  imwrite(buffered := BytesIO(), rescale_array(arr).astype(uint8), format='png')
  return bytesio_to_media(buffered, format="png")

def arrays_to_media(arrays: ndarray[(Any, Any, Any, Any), number]) -> str:
  mimsave(buffered := BytesIO(), [rescale_array(frame).astype(uint8) for frame in arrays], 'gif', fps=24)
  return bytesio_to_media(buffered, format="gif")

def base64_to_image(base64: str) -> Image:
  try:
    return open(BytesIO(b64decode(base64)))
  except UnidentifiedImageError:
    return new("RGBA", (1, 1))

def base64_to_array(base64: str) -> ndarray[(Any, Any), int]:
  return image_to_array(base64_to_image(base64))

def dicom_to_media(dicom: FileDataset) -> str:
  imwrite(buffered := BytesIO(), dicom.pixel_array, format='png')
  return bytesio_to_media(buffered, format="png")

def dicom_to_bytes(dicom: FileDataset) -> bytes:
  dcmwrite(buffered := BytesIO(), dicom)
  return buffered.getvalue()

def media_to_array(media: str) -> ndarray[(int, int, int), int]:
  return base64_to_array(media.split(",")[1])

def media_to_image(media: str) -> Image:
  return base64_to_image(media.split(",")[1])
