def bresenham(x0: int, y0: int, x1: int, y1: int) -> list[tuple[int, int]]:
  dx = abs(x1 - x0)
  dy = abs(y1 - y0)

  sx = -1 if x0 > x1 else 1
  sy = -1 if y0 > y1 else 1

  points = []
  if dx > dy:
    error = dx / 2.0
    while x0 != x1:
      points.append((x0, y0))
      error -= dy
      if error < 0:
        y0 += sy
        error += dx
      x0 += sx
  else:
    error = dy / 2.0
    while y0 != y1:
      points.append((x0, y0))
      error -= dx
      if error < 0:
        x0 += sx
        error += dy
      y0 += sy
  points.append((x0, y0))
  return points
