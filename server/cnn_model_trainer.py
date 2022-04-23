from keras.losses import binary_crossentropy
from keras.preprocessing.image import apply_affine_transform
from keras_preprocessing import image as kpi
from keras.optimizer_v2.adam import Adam
from glob import glob

from PIL import Image
from keras.layers import Input, MaxPooling2D, concatenate, Conv2D, Conv2DTranspose, Dropout, ReLU
from keras.models import Model
from numpy import random, array, sum, clip, newaxis
from numpy.random import choice, random, randint, uniform

def boolean(chance):
  return random() < chance

def random_flip(image, mask, chance):
  if boolean(chance):
    image = kpi.flip_axis(image, 0)
    mask = kpi.flip_axis(mask, 0)
  if boolean(chance):
    image = kpi.flip_axis(image, 1)
    mask = kpi.flip_axis(mask, 1)
  return image, mask

def random_rotate(image, mask, limits, chance):
  if boolean(chance):
    theta = uniform(*limits)
    image = apply_affine_transform(image, theta=theta)
    mask = apply_affine_transform(mask, theta=theta)
  return image, mask

def shift(image, limits):
  (height, width) = image.shape[:2]
  (x, y) = limits
  tx = x * height
  ty = y * width
  image = apply_affine_transform(image, ty=ty, tx=tx)
  return image

def random_shift(image, mask, w_limit, h_limit, chance):
  if boolean(chance):
    limits = uniform(*w_limit), uniform(*h_limit)
    image = shift(image, limits)
    mask = shift(mask, limits)
  return image, mask

def random_zoom(image, mask, limits, chance):
  if boolean(chance):
    (zx, zy) = uniform(*limits, 2)
    image = apply_affine_transform(image, zx=zx, zy=zy)
    mask = apply_affine_transform(mask, zx=zx, zy=zy)
  return image, mask

def random_shear(image, mask, limits, chance):
  if boolean(chance):
    shear = uniform(*limits)
    image = apply_affine_transform(image, shear=shear)
    mask = apply_affine_transform(mask, shear=shear)
  return image, mask

def random_contrast(image, limits, chance):
  if boolean(chance):
    alpha = 1.0 + uniform(*limits)
    # rgb to gray (YCbCr)
    coefficient = array([[[0.114, 0.587, 0.299]]])
    gray = image * coefficient
    gray = (3.0 * (1.0 - alpha) / gray.size) * sum(gray)
    image = alpha * image + gray
    image = clip(image, 0., 1.)
  return image

def random_brightness(image, limits, chance):
  return clip((1.0 + uniform(*limits)) * image, 0., 1.) if boolean(chance) else image

def random_saturation(image, limits, chance):
  if boolean(chance):
    alpha = 1.0 + uniform(*limits)
    # rgb to gray (YCbCr)
    coefficient = array([[[0.114, 0.587, 0.299]]])
    gray = image * coefficient
    gray = sum(gray, axis=2, keepdims=True)
    image = alpha * image + (1. - alpha) * gray
    image = clip(image, 0., 1.)
  return image

def random_crop(image, mask, size):
  (height, width) = image.shape[:2]
  x = randint(0, height - size)
  y = randint(0, width - size)

  return image[x: x + size, y:y + size, :], mask[x:x + size, y:y + size]

def random_augmentation(image, mask):
  image = random_brightness(image, limits=(-0.1, 0.1), chance=0.25)
  image = random_contrast(image, limits=(-0.1, 0.1), chance=0.25)
  image = random_saturation(image, limits=(-0.1, 0.1), chance=0.25)
  image, mask = random_rotate(image, mask, limits=(-10, 10), chance=0.05)
  image, mask = random_shear(image, mask, limits=(-5, 5), chance=0.05)
  image, mask = random_flip(image, mask, chance=0.5)
  image, mask = random_shift(image, mask, w_limit=(-0.1, 0.1), h_limit=(-0.1, 0.1), chance=0.05)
  image, mask = random_zoom(image, mask, limits=(0.9, 1.1), chance=0.05)
  return image, mask

def unet(dropout, activation):
  inputs = Input((None, None, 3))
  conv1 = Dropout(dropout)(activation()(Conv2D(32, (3, 3), padding='same')(inputs)))
  conv1 = Dropout(dropout)(activation()(Conv2D(32, (3, 3), padding='same')(conv1)))
  pool1 = MaxPooling2D(pool_size=(2, 2))(conv1)

  conv2 = Dropout(dropout)(activation()(Conv2D(64, (3, 3), padding='same')(pool1)))
  conv2 = Dropout(dropout)(activation()(Conv2D(64, (3, 3), padding='same')(conv2)))
  pool2 = MaxPooling2D(pool_size=(2, 2))(conv2)

  conv3 = Dropout(dropout)(activation()(Conv2D(128, (3, 3), padding='same')(pool2)))
  conv3 = Dropout(dropout)(activation()(Conv2D(128, (3, 3), padding='same')(conv3)))
  pool3 = MaxPooling2D(pool_size=(2, 2))(conv3)

  conv4 = Dropout(dropout)(activation()(Conv2D(256, (3, 3), padding='same')(pool3)))
  conv4 = Dropout(dropout)(activation()(Conv2D(256, (3, 3), padding='same')(conv4)))
  pool4 = MaxPooling2D(pool_size=(2, 2))(conv4)

  conv5 = Dropout(dropout)(activation()(Conv2D(512, (3, 3), padding='same')(pool4)))
  conv5 = Dropout(dropout)(activation()(Conv2D(512, (3, 3), padding='same')(conv5)))

  up6 = concatenate([Conv2DTranspose(256, (2, 2), strides=(2, 2), padding='same')(conv5), conv4], axis=3)
  conv6 = Dropout(dropout)(activation()(Conv2D(256, (3, 3), padding='same')(up6)))
  conv6 = Dropout(dropout)(activation()(Conv2D(256, (3, 3), padding='same')(conv6)))

  up7 = concatenate([Conv2DTranspose(128, (2, 2), strides=(2, 2), padding='same')(conv6), conv3], axis=3)
  conv7 = Dropout(dropout)(activation()(Conv2D(128, (3, 3), padding='same')(up7)))
  conv7 = Dropout(dropout)(activation()(Conv2D(128, (3, 3), padding='same')(conv7)))

  up8 = concatenate([Conv2DTranspose(64, (2, 2), strides=(2, 2), padding='same')(conv7), conv2], axis=3)
  conv8 = Dropout(dropout)(activation()(Conv2D(64, (3, 3), padding='same')(up8)))
  conv8 = Dropout(dropout)(activation()(Conv2D(64, (3, 3), padding='same')(conv8)))

  up9 = concatenate([Conv2DTranspose(32, (2, 2), strides=(2, 2), padding='same')(conv8), conv1], axis=3)
  conv9 = Dropout(dropout)(activation()(Conv2D(32, (3, 3), padding='same')(up9)))
  conv9 = Dropout(dropout)(activation()(Conv2D(32, (3, 3), padding='same')(conv9)))

  conv10 = Conv2D(1, (1, 1), activation='sigmoid')(conv9)

  model = Model(inputs=[inputs], outputs=[conv10])

  model.compile(optimizer=Adam(learning_rate=1e-3), loss=binary_crossentropy, metrics=['accuracy'])
  return model

def read_image(path):
  return array(Image.open(path)) / 255.

def read_expert(path):
  return (array(Image.open(path)) / 255.)[..., newaxis]

def read_mask(path):
  return (array(Image.open(path)) / 255.)[..., newaxis]

def read_pair(pair):
  (image, expert) = pair
  return read_image(image), read_expert(expert)

def generator(dataset):
  pairs = list(map(read_pair, dataset))
  (span, images, crops) = list(range(len(dataset))), 4, range(2)

  while True:
    picked = (pairs[pair] for pair in choice(span, size=images, replace=False))
    augmented = (random_augmentation(*pair) for pair in picked)
    (X, y) = zip(*(random_crop(*pair, 64) for pair in augmented for _ in crops))
    yield array(X), array(y)

if __name__ == '__main__':
  modelname = f"unet_do_0.2_activation_ReLU"
  print(f"Model : {modelname}")

  resources = "resources"
  DRIVE = f"{resources}/dataset/DRIVE"
  images = f"{DRIVE}/train/images/*.tif"
  expert = f"{DRIVE}/train/1st_manual/*.gif"

  trainset = list(zip(sorted(glob(images)), sorted(glob(expert))))
  print("Train set size:", len(trainset))

  model = unet(dropout=0.2, activation=ReLU)
  filepath = f"{resources}/models/{modelname}.best.h5"
  steps_per_epoch = len(trainset) // 16 * 100
  history = model.fit(generator(trainset), epochs=2, verbose=1, steps_per_epoch=steps_per_epoch)

  model.save_weights(filepath)
