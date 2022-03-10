import { createContext } from "@/shared/utils";
import { createEffect, createResource, createSignal } from "solid-js";
import { fetchTomographyData } from "@/components/Tomography/components";
import { useTomography } from "@/components/Tomography/context";
import axios from "axios";

export const [useCanvas, CanvasProvider] = createContext("Canvas", () => {
  const { image } = useTomography();
  const [imagedata] = createResource(image, fetchTomographyData);
  const [canvas, setCanvas] = createSignal<HTMLCanvasElement>(null);

  createEffect(async () => {
    if (!canvas() || !imagedata()) return;
    console.log(
      await axios.post("http://localhost:3001/api/tomography/rsme", {
        first: imagedata(),
        second: imagedata(),
      })
    );
  });

  createEffect(() => {
    if (!canvas() || !imagedata()) return;
    const context = canvas().getContext("2d");
    context.putImageData(imagedata(), 0, 0);
    context.beginPath();
    const first = context.getImageData(0, 0, canvas().width, canvas().height);

    //@ts-ignore
    // console.log({ tomography: tomography({ data: [1, 2, 3] }, { data: [2, 3, 4] }) });

    context.strokeStyle = "red";
    context.moveTo(0, 0);
    context.lineTo(200, 200);
    context.stroke();
  });

  return { canvas, setCanvas, imagedata } as const;
});
