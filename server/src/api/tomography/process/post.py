from src import app
from .models import TomographyResponse, TomographyRequest

@app.post("/api/tomography/process", response_model=TomographyResponse)
def process_command(item: TomographyRequest):
  return TomographyResponse(item.encoded_image, 0)
