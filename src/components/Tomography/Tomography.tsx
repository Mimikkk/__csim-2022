import { TomographyProvider, useTomography } from "./context";
import { TomographSelect } from "./components";
import "./Tomography.scss";
import { Component } from "solid-js";
export const TomographInfo = () => {
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

const TomographyContent = () => {
  const { image } = useTomography();
  return (
    <div class="tomography">
      <div>
        <TomographSelect />
        <TomographInfo />
        <TomographyParameters />
      </div>
      <OutlineBox>
        <Image />
      </OutlineBox>
      <OutlineBox>
        <Image />
      </OutlineBox>
    </div>
  );
};

const Image: Component = () => {
  const { image } = useTomography();

  return (
    <img
      class="image"
      src={`/tomograph/photos/${image()}`}
      alt="Tomography image"
      onload={(xd) => {
        console.log("load", xd);
      }}
    />
  );
};

const OutlineBox: Component = ({ children }) => (
  <div class="bg-gray-800 p-2 rounded-md">
    <Image />
  </div>
);

export const Tomography = () => (
  <TomographyProvider>{() => <TomographyContent />}</TomographyProvider>
);
