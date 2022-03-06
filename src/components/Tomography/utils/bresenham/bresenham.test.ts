import { bresenham } from "./bresenham";

describe("Bresenham algorithm", () => {
  it("Draw path from [1,1] to [15,18]", () => {
    const [start, end]: [number, number][] = [
      [1, 1],
      [15, 18],
    ];
    const path = bresenham(start, end);
    expect(path).toEqual([
      [1, 1],
      [2, 2],
      [3, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
      [8, 10],
      [9, 11],
      [10, 12],
      [11, 13],
      [12, 14],
      [13, 15],
      [13, 16],
      [14, 17],
      [15, 18],
    ]);
  });
});
