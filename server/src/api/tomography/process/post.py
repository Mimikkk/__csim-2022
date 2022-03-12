from numpy import array

from src import app
from src.math import rmse
from src.utils import img_to_base64
from .models import TomographyResponse, TomographyRequest

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  image = item.image
  return TomographyResponse(img_to_base64(image), img_to_base64(image), rmse(array(item.image), array(image)))
