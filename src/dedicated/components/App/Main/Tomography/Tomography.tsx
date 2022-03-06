import { TomographyProvider, useTomography } from "./context";
import { TomographSelect } from "./components";

export const TomographInfo = () => {
  return (
    <>
      <p>Informacje o pliku</p>
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

const Image = () => {
  const { image } = useTomography();

  return (
    <>
      <div class="w-[20%] aspect-square p-2 flex justify-center bg-gray-800 opacity-80 rounded-md">
        {image() && (
          <img
            class="rounded-md"
            src={`/tomograph/photos/${image()}`}
            alt="Tomography image"
          />
        )}
      </div>
      <div class="w-[40%] aspect-square p-2 flex justify-center bg-gray-800 opacity-80 rounded-md">
        {image() && (
          <img
            class="rounded-md"
            src={`/tomograph/photos/${image()}`}
            alt="Tomography image"
          />
        )}
      </div>
    </>
  );
};

const TomographyContent = () => {
  return (
    <div>
      <div>
        <TomographSelect />
        <TomographInfo />
        <TomographyParameters />
      </div>
    </div>
  );
};

export const Tomography = () => (
  <TomographyProvider>{() => <TomographyContent />}</TomographyProvider>
);
