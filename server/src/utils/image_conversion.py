from base64 import b64encode, b64decode

from PIL.Image import Image, open, new
from io import BytesIO

def img_to_base64(image: Image) -> str:
  image.save(buffered := BytesIO(), format="PNG")
  return str(b64encode(buffered.getvalue()))

def base64_to_img(base64: str) -> Image:
  try:
    return open(BytesIO(b64decode(base64)))
  except:
    return new("RGB", (1, 1))
