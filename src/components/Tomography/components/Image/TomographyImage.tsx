import { Component, onCleanup } from "solid-js";
import { useTomography } from "@/components/Tomography/context";

export const TomographyImage: Component = () => {
  const { image } = useTomography();

  return (
    <canvas
      ref={(canvas) => {
        const context = canvas.getContext("2d");

        let frame = requestAnimationFrame(loop);
        function loop(timestamp) {
          frame = requestAnimationFrame(loop);

          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          for (let p = 0; p < imageData.data.length; p += 4) {
            const i = p / 4;
            const x = i % canvas.width;
            const y = (i / canvas.height) >>> 0;

            const r =
              64 + (128 * x) / canvas.width + 64 * Math.sin(timestamp / 1000);
            const g =
              64 + (128 * y) / canvas.height + 64 * Math.cos(timestamp / 1000);
            const b =
              64 + (128 * y) / canvas.height + 64 * Math.tanh(timestamp / 1000);

            imageData.data[p + 0] = r;
            imageData.data[p + 1] = g;
            imageData.data[p + 2] = b;
            imageData.data[p + 3] = 255;
          }

          context.putImageData(imageData, 0, 0);
        }

        onCleanup(() => cancelAnimationFrame(frame));
      }}
      width={256}
      height={256}
    />
  );
};
