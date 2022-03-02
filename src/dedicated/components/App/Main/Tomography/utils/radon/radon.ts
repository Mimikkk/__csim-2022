import { range } from "rambda";
import { bresenham } from "@/dedicated/components/App/Main/Tomography/utils/bresenham/bresenham";

const { ceil, floor, sqrt, PI, round } = Math;
export const radon = (
  plane: number[][],
  scanCount: number,
  angle: number,
  dx: number,
  da: number
): number[][] => {
  const alpha = PI >> 1;
  const n = ceil(180 / dx) + 1;
  const detectors: [number, number][] = range(0, scanCount).map(() => [0, 0]);
  const emiters: [number, number][] = range(0, scanCount).map(() => [0, 0]);
  const height = plane.length;
  const width = plane?.[0].length;
  const radius = floor(sqrt(width * width + height * height) / 2);
  const result = range(0, radius * 2).map(() =>
    range(0, radius * 2).map(() => 0)
  );
  const xoff = round((radius * 2 - height) / 2);
  const yoff = round((radius * 2 - width) / 2);

  for (const x of range(xoff, xoff + width)) {
    for (const y of range(yoff, yoff + width)) {
      result[x][y] = plane[x][y];
    }
  }

  const sinogram = [];
  for (const j of range(0, n)) {
    const line = range(0, n).map(() => 0);
    for (const i of range(0, n)) {
      let x =
        radius *
        Math.cos(
          alpha +
            Math.PI -
            (1 / 2) * angle +
            i * (angle / (scanCount - 1)) +
            j * da
        );
      let y =
        radius *
        Math.sin(
          alpha +
            Math.PI -
            (1 / 2) * angle +
            i * (angle / (scanCount - 1)) +
            j * da
        );
      detectors[i] = [round(x), round(y)];
      let xe =
        radius *
        Math.cos(
          alpha + (1 / 2) * angle - i * (angle / (scanCount - 1)) + j * da
        );
      let ye =
        radius *
        Math.sin(
          alpha + (1 / 2) * angle - i * (angle / (scanCount - 1)) + j * da
        );
      emiters[i] = [round(xe), round(ye)];
      let points = bresenham(emiters[i], detectors[i]);

      let k = 1;
      for (const [xp, yp] of points) {
        if (
          xp * radius > xoff &&
          yp + radius > yoff &&
          xp + radius < xoff + width &&
          yp + radius < yoff + height
        ) {
          line[i] += plane[yp + radius - 1][xp + radius - 1];
          k += 1;
        }
      }

      if (k > 1) --k;
      line[i] /= k;
    }
    sinogram.push(line);
  }

  return sinogram;
};
