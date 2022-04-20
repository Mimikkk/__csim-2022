from array import array
from typing import Literal

from numpy import zeros
from skimage.exposure import equalize_hist
from skimage.filters import unsharp_mask
from skimage.morphology import erosion, disk
from skimage.transform import rescale

def scale(image, factor):
  return rescale(image, factor, anti_aliasing=True)

def rgb2channel(image, channel: Literal[0, 1, 2, 'r', 'g', 'b', 'red', 'green', 'blue']):
  match channel:
    case 'red' | 'r' | 0:
      return image[:, :, 0]
    case 'green' | 'g' | 1:
      return image[:, :, 1]
    case 'blue' | 'b' | 2:
      return image[:, :, 2]

def sharpen(image):
  return unsharp_mask(image, radius=4, amount=2)

def normalize_histogram(image):
  return equalize_hist(image)

def create_mask(image, threshold=0.05):
  image = image.copy()

  image[image[:, :] > image * threshold] = 1
  image[image[:, :] < image * threshold] = 0

  erosion_disk = disk(24)
  image = erosion(image, erosion_disk)
  return image

def apply_mask(image, mask):
  return image * mask

def create_confusion_matrix(image, mask):
  confusion = zeros((*image.shape, 3))
  (width, height) = image.shape

  (tp, fp, fn, tn) = (0,) * 4
  for x in range(width):
    for y in range(height):
      if (image[x, y]):
        if (mask[x, y]):
          confusion[x, y, :] = (0, 1, 0)
          tp += 1
        else:
          confusion[x, y, :] = (1, 0, 0)
          fp += 1
      else:
        if (mask[x, y]):
          confusion[x, y, :] = (0, 0, 1)
          fn += 1
        else:
          tn += 1

  return (array(confusion), tp, fp, fn, tn)

def create_statistics(image, mask):
  image = image > 0
  mask = mask > 0

  (confusion, tp, fp, fn, tn) = create_confusion_matrix(image, mask)

  accuracy = (tp + tn) / (tn + fn + tp + fp)
  sensitivity = tp / (tp + fn)
  specificity = tn / (fp + tn)

  return (confusion, accuracy, sensitivity, specificity)
