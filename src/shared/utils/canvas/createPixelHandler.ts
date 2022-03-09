import { eachpixel } from "@/shared/utils";
import { onCleanup } from "solid-js";
import { CanvasLoopCallback } from "./types";

export const createPixelHandler: CanvasLoopCallback =
  (createPixelHandler) => (canvas) => {
    const loop = (timestamp) => {
      frame = requestAnimationFrame(loop);
      eachpixel(canvas, createPixelHandler(canvas, timestamp));
    };

    let frame = requestAnimationFrame(loop);
    onCleanup(() => cancelAnimationFrame(frame));
  };
