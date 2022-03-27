from dataclasses import dataclass
from src.utils import base64_to_image

@dataclass
class TomographyRequest(object):
  encoded_image: str
  detectors: int
  scans: int
  spread: int
  use_filter: bool

  @property
  def encoded_format(self): return self.encoded_image and self.encoded_image.split(',')[0] or ""

  @property
  def encoded_string(self): return self.encoded_image and self.encoded_image.split(',')[1] or ""

  @property
  def image(self): return base64_to_image(self.encoded_string)

@dataclass
class TomographyResponse(object):
  encoded_reconstruction_png: str
  encoded_reconstruction_gif: str
  encoded_sinogram_png: str
  rmse: float
