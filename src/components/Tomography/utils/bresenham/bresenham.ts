export const bresenham = (
  [x0, y0]: [number, number],
  [x1, y1]: [number, number]
): [number, number][] => {
  const points: [number, number][] = [[x0, y0]];
  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1;
  const sy = y0 < y1 ? 1 : -1;

  let err = dx - dy;
  while (x0 !== x1 || y0 !== y1) {
    const e2 = err << 1;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
    points.push([x0, y0]);
  }
  return points;
};
