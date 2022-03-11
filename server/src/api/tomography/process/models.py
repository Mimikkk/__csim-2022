from dataclasses import dataclass
from src.utils import base64_to_img

@dataclass
class TomographyRequest(object):
  encoded_image: str
  detectors: int
  scans: int
  angle: int
  use_filter: bool

  @property
  def image(self): return base64_to_img(self.encoded_image)

@dataclass
class TomographyResponse(object):
  encoded_image: str
  rsme: float
