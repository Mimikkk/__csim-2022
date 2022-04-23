from dataclasses import dataclass

from fastapi import Response
from keras.layers import ReLU
from numpy import resize, newaxis, clip

from cnn_model_trainer import unet
from src.app import logger
from src import app
from src.utils.image_conversion import media_to_array, array_to_media

classifier = unet(dropout=0.2, activation=ReLU)

modelname = f"unet_do_0.2_activation_ReLU"
resources = "resources"
classifier.load_weights(f"{resources}/models/{modelname}.best.h5", by_name=True)

@dataclass
class EyesCnnRequest(object):
  image: str

shape = (576, 576)

@app.post("/api/eyes/cnn/process")
async def eyes_cnn_process_command(request: EyesCnnRequest):
  logger.info("Received request to process image with convolutional neural network method...")
  image = media_to_array(request.image)

  logger.info("Adjusting image...")
  resized = resize(image, shape)

  logger.info("Predicting veins...")
  (prediction,) = classifier.predict(resized[newaxis, ...])
  prediction = clip(prediction, 0, 1)

  prediction = resize(prediction, image.shape)

  return Response(array_to_media(prediction), media_type="image/png")
