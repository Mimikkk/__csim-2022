from base64 import b64decode
from dataclasses import dataclass
from io import BytesIO

from PIL import Image

@dataclass
class TomographyRequest:
  encoded_image: str
  detectors: int
  scans: int
  angle: int
  use_filter: bool

  @property
  def image(self):
    return Image.open(BytesIO(b64decode(self.encoded_image)))

@dataclass
class TomographyResponse:
  encoded_image: str
  rsme: float
