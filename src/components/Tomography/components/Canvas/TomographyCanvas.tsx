import { useTomography } from "@/components/Tomography/context";
import { createPixelHandler } from "@/shared/utils";
import { Component } from "solid-js";

export const TomographyCanvas: Component = () => {
  const { image } = useTomography();

  return (
    <canvas
      ref={createPixelHandler((canvas, timestamp) => ([x, y]) => {
        const r = (128 * x) / canvas.width + 64 * Math.sin(timestamp / 1000);
        const g = (128 * y) / canvas.height + 64 * Math.cos(timestamp / 1000);
        const b = (128 * y) / canvas.height + 64 * Math.tanh(timestamp / 1000);
        return [r, g, b, 255];
      })}
      width={256}
      height={256}
    />
  );
};
