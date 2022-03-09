export type Point = [number, number];
export type Rgba = [number, number, number, number];

export interface HTMLCanvasCallback {
  (point: Point, rgba?: Rgba): Rgba;
}

export interface CanvasPixelHandlerCallback {
  (
    canvas: HTMLCanvasElement,
    deltatime: DOMHighResTimeStamp,
    timestamp: DOMHighResTimeStamp
  ): HTMLCanvasCallback;
}

export interface CanvasRefCallback {
  (canvas: HTMLCanvasElement): void;
}

export interface CanvasLoopCallback {
  (loop: CanvasPixelHandlerCallback): CanvasRefCallback;
}
