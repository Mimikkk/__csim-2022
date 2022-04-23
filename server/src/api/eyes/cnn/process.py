from dataclasses import dataclass

from fastapi import Response
from keras.layers import ReLU
from numpy import newaxis, clip
from skimage.color import rgb2gray
from skimage.transform import resize

from cnn_model_trainer import unet
from src.app import logger
from src import app
from src.utils.image_conversion import media_to_array, array_to_media


@dataclass
class EyesCnnRequest(object):
  image: str

shape = (576, 576)


@app.post("/api/eyes/cnn/process")
async def eyes_cnn_process_command(request: EyesCnnRequest):
  classifier = eyes_cnn_process_command.classifier
  if not eyes_cnn_process_command.classifier:
    eyes_cnn_process_command.classifier = unet(dropout=0.2, activation=ReLU)
    modelname = f"unet_do_0.2_activation_ReLU"
    resources = "resources"
    eyes_cnn_process_command.classifier.load_weights(f"{resources}/models/{modelname}.best.h5", by_name=True)
    classifier = eyes_cnn_process_command.classifier

  logger.info("Received request to process image with convolutional neural network method...")
  image = media_to_array(request.image) / 255

  logger.info("Adjusting image...")
  resized = resize(image, shape)
  images = resized[newaxis, ...]

  logger.info("Predicting veins...")
  (prediction,) = clip(classifier.predict(images), 0, 1)
  prediction = resize(prediction, image.shape)

  return Response(array_to_media(rgb2gray(prediction)), media_type="image/png")
eyes_cnn_process_command.classifier = None
