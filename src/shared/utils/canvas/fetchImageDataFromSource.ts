import { fetchCanvasFromSource } from "@/shared/utils";

export const fetchImageDataFromSource = async (
  source: string
): Promise<ImageData> => {
  const canvas = await fetchCanvasFromSource(source);
  return canvas
    ? canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)
    : new ImageData(1, 1);
};
