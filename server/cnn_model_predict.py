from glob import glob

from keras.layers import ReLU
from matplotlib import pyplot as plt
from numpy import array
from skimage.transform import resize
import numpy as np
from tqdm import tqdm
import cv2
from sklearn.metrics import roc_auc_score

from cnn_model_trainer import read_image, read_expert, unet

batchsize = 4
shape = (576, 576)

def batch(dataset, n=batchsize):
  for i in range(0, len(dataset), n):
    yield dataset[i:min(i + n, len(dataset))]

if __name__ == '__main__':
  modelname = f"unet_do_0.2_activation_ReLU"
  print(f"Model : {modelname}")

  resources = "resources"
  DRIVE = f"{resources}/dataset/DRIVE"
  images = f"{DRIVE}/train/images/*.tif"
  expert = f"{DRIVE}/train/1st_manual/*.gif"

  testset = list(zip(sorted(glob(f'{DRIVE}/train/images/*.tif')),
                     sorted(glob(f'{DRIVE}/train/1st_manual/*.gif')),
                     sorted(glob(f'{DRIVE}/train/mask/*.gif'))))

  print("Test set size:", len(testset))
  model = unet(dropout=0.2, activation=ReLU)
  model.load_weights(f"{resources}/models/{modelname}.best.h5", by_name=True)

  gt_list = []
  pred_list = []
  for batch_files in tqdm(batch(testset), total=len(testset) // batchsize):
    images = [resize(read_image(image_path[0]), shape) for image_path in batch_files]
    segments = [read_expert(image_path[1]) for image_path in batch_files]
    mask = [read_expert(image_path[2]) for image_path in batch_files]

    images = array(images)

    predictions = model.predict(images)
    predictions = np.clip(predictions, 0, 1)

    for i, image_path in enumerate(batch_files):
      prediction = predictions[i, :, :, 0]
      prediction = resize(prediction, shape)

      plt.imshow(prediction, cmap='gray')
      plt.show()
