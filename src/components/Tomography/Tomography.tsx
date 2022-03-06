import { TomographyProvider, useTomography } from "./context";
import { TomographSelect } from "./components";
import "./Tomography.scss";
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
    <article class="tomography">
      <div>
        <TomographSelect />
        <TomographInfo />
        <TomographyParameters />
      </div>
      <div class="p-2 bg-gray-800 w-full aspect-square">
        {image() && (
          <img
            class="rounded-md"
            src={`/tomograph/photos/${image()}`}
            alt="Tomography image"
          />
        )}
      </div>
      <div class="p-2 bg-gray-800 w-full aspect-square">
        {image() && (
          <img
            class="rounded-md"
            src={`/tomograph/photos/${image()}`}
            alt="Tomography image"
          />
        )}
      </div>
    </article>
  );
};

export const Tomography = () => (
  <TomographyProvider>{() => <TomographyContent />}</TomographyProvider>
);
