import { TomographyProvider, useTomography } from "./context";
import { TomographSelect } from "./components";
import "./Tomography.scss";
import { Component } from "solid-js";
import { OutlineBox } from "@/shared/components";
export const TomographyInfo = () => {
  return (
    <>
      <p>Szerokość:</p>
      <p>Wysokość:</p>
      <p>RSME:</p>
    </>
  );
};

export const TomographyParameters = () => {
  return (
    <>
      <p>Liczba detektorów:</p>
      <p>Liczba skanów:</p>
      <p>Rozpiętość:</p>
      <p>Filtrowanie:</p>
    </>
  );
};

export const TomographyControls = () => (
  <div>
    <TomographSelect />
    <TomographyInfo />
    <TomographyParameters />
  </div>
);

const TomographyImage: Component = () => {
  const { image } = useTomography();

  return (
    image() && (
      <img
        class="max-h-[800px]"
        src={`/tomograph/photos/${image()}`}
        alt="Tomography image"
        onload={(xd) => {
          console.log("load", xd);
        }}
      />
    )
  );
};

const TomographyContent = () => (
  <div class="tomography">
    <TomographyControls />
    <OutlineBox>
      <TomographyImage />
    </OutlineBox>
    <OutlineBox>
      <TomographyImage />
    </OutlineBox>
  </div>
);

export const Tomography = () => (
  <TomographyProvider>
    <TomographyContent />
  </TomographyProvider>
);
