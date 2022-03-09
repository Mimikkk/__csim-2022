import { HTMLCanvasCallback } from "./types";

export const eachpixel = (
  canvas: HTMLCanvasElement,
  callback: HTMLCanvasCallback
) => {
  const context = canvas.getContext("2d");
  const image = context.getImageData(0, 0, canvas.width, canvas.height);

  for (let p = 0; p < image.data.length; p += 4) {
    const i = p / 4;
    const x = i % canvas.width;
    const y = (i / canvas.height) >>> 0;

    image.data.set(callback([x, y], image.data.slice(p, p + 4) as any), p);
  }
  context.putImageData(image, 0, 0);
};
