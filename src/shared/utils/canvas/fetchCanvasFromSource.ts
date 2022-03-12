import { Nullable } from "@/shared/types";

export const fetchCanvasFromSource = async (
  src: string
): Promise<Nullable<HTMLCanvasElement>> => {
  const image = Object.assign(new Image(), { src });

  try {
    await image.decode();
  } catch {
    return null;
  }

  const canvas = Object.assign(document.createElement("canvas"), {
    width: image.width,
    height: image.height,
  });

  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.drawImage(image, 0, 0);
  return canvas;
};
