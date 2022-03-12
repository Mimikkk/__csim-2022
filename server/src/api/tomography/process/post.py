from src import app
from src.math import rmse, create_sinogram, inverse_sinogram
from src.utils import img_to_base64, img_to_array
from .models import TomographyResponse, TomographyRequest

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  original = item.image
  sinogram = create_sinogram(original, item.detectors, item.scans, item.angle, item.use_filter)
  inverse = inverse_sinogram(sinogram, item.detectors, item.scans, item.angle, item.use_filter)

  return TomographyResponse(
    img_to_base64(inverse),
    img_to_base64(sinogram),
    rmse(img_to_array(sinogram), img_to_array(inverse))
  )
