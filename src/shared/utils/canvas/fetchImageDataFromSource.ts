export const fetchImageDataFromSource = async (
  source: string
): Promise<ImageData> => {
  const image = Object.assign(new Image(), { src: source });
  try {
    await image.decode();
  } catch {
    return new ImageData(1, 1);
  }

  const context = Object.assign(document.createElement("canvas"), {
    width: image.width,
    height: image.height,
  }).getContext("2d");

  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0);
  return context.getImageData(0, 0, image.width, image.height);
};
