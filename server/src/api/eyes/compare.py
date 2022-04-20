from dataclasses import dataclass

from src import app

from src.app import logger
from src.utils.image_conversion import media_to_array, array_to_media
from src.utils.image_operations import create_statistics

@dataclass
class EyesCompareRequest(object):
  processed: str
  expert: str

@dataclass
class EyesCompareResponse(object):
  confusion: str
  accuracy: float
  sensitivity: float
  specificity: float
  geometric: float

@app.post("/api/eyes/compare", response_model=EyesCompareResponse)
async def eyes_compare_to_expert_command(request: EyesCompareRequest):
  logger.info("Received request to compare processed image with expert mask...")
  processed = media_to_array(request.processed)
  expert = media_to_array(request.expert)

  logger.info(f"Creating statistics...")
  (confusion, accuracy, sensitivity, specificity, geometric) = create_statistics(processed, expert)

  return {
    "confusion": array_to_media(confusion),
    "accuracy": accuracy,
    "sensitivity": sensitivity,
    "specificity": specificity,
    "geometric": geometric
  }
