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
  def encoded_format(self): return self.encoded_image.split(',')[0]

  @property
  def image(self): return base64_to_img(self.encoded_image.split(',')[1])

@dataclass
class TomographyResponse(object):
  encoded_reconstruction: str
  encoded_sinogram: str
  rsme: float
