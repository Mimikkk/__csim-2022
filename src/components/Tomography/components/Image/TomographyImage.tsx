import { Component, onCleanup } from "solid-js";
import { useTomography } from "@/components/Tomography/context";

export const TomographyImage: Component = () => {
  const { image } = useTomography();

  return (
    image() && (
      <img
        class="max-h-[800px]"
        src={`/tomograph/photos/${image()}`}
        alt="Tomography image"
        onload={(event) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            console.log({ x: reader.result });
          };

          console.log({ event, c: event.currentTarget });
        }}
      />
    )
  );
};
