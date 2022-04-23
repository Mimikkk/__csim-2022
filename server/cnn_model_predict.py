from glob import glob

from keras.layers import ReLU
from matplotlib import pyplot as plt
from numpy import newaxis
from skimage.transform import resize
import numpy as np

from cnn_model_trainer import read_image, unet

shape = (576, 576)

if __name__ == '__main__':
  modelname = f"unet_do_0.2_activation_ReLU"
  print(f"Model : {modelname}")

  resources = "resources"
  DRIVE = f"{resources}/dataset/DRIVE"
  images = f"{DRIVE}/test/images/*.tif"

  testset = sorted(glob(images))

  print("Test set size:", len(testset))

  model = unet(dropout=0.2, activation=ReLU)
  model.load_weights(f"{resources}/models/{modelname}.best.h5", by_name=True)

  for image in map(read_image, testset):
    image = resize(image, shape)
    images = image[newaxis, ...]

    print(images.shape)

    (prediction,) = model.predict(images)
    prediction = np.clip(prediction, 0, 1)

    prediction = resize(prediction, shape)

    plt.imshow(prediction, cmap='gray')
    plt.show()
    break
