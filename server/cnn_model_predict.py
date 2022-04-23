from glob import glob

from keras.layers import ReLU
from matplotlib import pyplot as plt
from numpy import array, newaxis
from skimage.transform import resize
import numpy as np

from cnn_model_trainer import read_image, read_expert, unet, read_mask

batchsize = 4
shape = (576, 576)

def batch(dataset, n=batchsize):
  for i in range(0, len(dataset), n):
    yield dataset[i:min(i + n, len(dataset))]

def read_pair(pair):
  (image, expert, mask) = pair
  image = resize(read_image(image), shape)
  expert = read_expert(expert)
  mask = read_mask(mask)
  return image, expert, mask

if __name__ == '__main__':
  modelname = f"unet_do_0.2_activation_ReLU"
  print(f"Model : {modelname}")

  resources = "resources"
  DRIVE = f"{resources}/dataset/DRIVE"
  images = f"{DRIVE}/train/images/*.tif"
  expert = f"{DRIVE}/train/1st_manual/*.gif"
  masks = f"{DRIVE}/train/mask/*.gif"

  testset = sorted(glob(images))

  print("Test set size:", len(testset))

  model = unet(dropout=0.2, activation=ReLU)
  model.load_weights(f"{resources}/models/{modelname}.best.h5", by_name=True)

  for image in map(read_image, testset):
    image = resize(image, shape)
    images = image[newaxis, ...]

    (prediction,) = model.predict(images)
    prediction = np.clip(prediction, 0, 1)

    prediction = resize(prediction, shape)

    plt.imshow(prediction, cmap='gray')
    plt.show()
