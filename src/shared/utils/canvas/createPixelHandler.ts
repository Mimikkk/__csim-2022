import { eachpixel } from "@/shared/utils";
import { onCleanup } from "solid-js";
import { CanvasLoopCallback } from "./types";

export const createPixelHandler: CanvasLoopCallback =
  (createPixelHandler) => (canvas) => {
    let start = performance.now();

    const loop = (timestamp) => {
      frame = requestAnimationFrame(loop);
      const delta = timestamp - start;
      start = timestamp;

      eachpixel(canvas, createPixelHandler(canvas, delta, timestamp));
    };

    let frame = requestAnimationFrame(loop);
    onCleanup(() => cancelAnimationFrame(frame));
  };
