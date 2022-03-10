from base64 import b64encode
from io import BytesIO

from PIL.Image import Image

def img_to_base64(image: Image) -> str:
  buffered = BytesIO()
  image.save(buffered, format="PNG")
  return str(b64encode(buffered.getvalue()))
