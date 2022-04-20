from dataclasses import dataclass

from fastapi import Response
from skimage.filters.ridges import sato

from src.app import logger
from src import app
from src.utils.image_conversion import media_to_array, array_to_media, rescale_array
from src.utils.image_operations import apply_mask, rgb2channel, sharpen, normalize_histogram, create_mask

@dataclass
class EyesTraditionalRequest(object):
  image: str

def binary_decision(image, threshold=0.35):
  return image > threshold

@app.post("/api/eyes/traditional/process")
async def eyes_traditional_process_command(request: EyesTraditionalRequest):
  logger.info("Received request to process image with traditional methods...")
  image = media_to_array(request.image)

  logger.info("Creating mask...")
  mask = create_mask(rgb2channel(image, 'green'))

  logger.info("Preprocessing image...")
  normalized = normalize_histogram(sharpen(rgb2channel(image, 'green')))

  logger.info("Filtering veins...")
  veins = binary_decision(rescale_array((apply_mask(sato(normalized), mask)), (0, 1)), 0.25)

  return Response(array_to_media(veins), media_type="image/png")
