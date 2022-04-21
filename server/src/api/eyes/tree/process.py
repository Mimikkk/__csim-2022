from dataclasses import dataclass
import pickle

from fastapi import Response
from numpy import pad, zeros, average, median, var
from skimage.filters.ridges import sato
from skimage.transform import resize

from src.app import logger
from src import app
from src.utils.image_conversion import media_to_array, array_to_media
from src.utils.image_operations import rgb2channel, create_mask, normalize_histogram, sharpen, apply_mask, scale

@dataclass
class EyesKnnRequest(object):
  image: str

with open("decision_tree_classifier_model_12.pkl", "rb") as file:
  classifier = pickle.load(file)

def calculate_metrics(section):
  return (average(section), median(section), var(section))

def predict_veins(classifier, image, diameter):
  (width, height) = image.shape
  prediction = zeros((width, height))

  padded = pad(image, diameter // 2)
  for x in range(0, width):
    if x % 100 == 0: logger.info(f"Processing row {x} of {width}...")

    metrics = [calculate_metrics(section) for section in
               [padded[x:x + diameter, y:y + diameter] for y in range(0, height)]]
    prediction[x, :] = classifier.predict(metrics)
  logger.info(f"Finished processing all {width} rows...")

  return prediction

@app.post("/api/eyes/tree/process")
async def eyes_tree_process_command(request: EyesKnnRequest):
  logger.info("Received request to process image with sampled decision tree classifier...")

  logger.info("Reading image...")
  image = rgb2channel(media_to_array(request.image), 'green')

  logger.info("Creating mask...")
  mask = create_mask(image)

  logger.info("Normalizing image...")
  normalized = normalize_histogram(sharpen(image))
  processed = apply_mask(sato(normalized), mask)

  logger.info("Predicting veins with the classifier...")
  processed = resize(processed, image.shape)
  prediction = predict_veins(classifier, processed, 12)
  prediction = resize(prediction, image.shape)

  return Response(array_to_media(prediction), media_type="image/png")
