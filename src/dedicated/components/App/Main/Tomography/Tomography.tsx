import { TomographyProvider, useTomography } from "./context";
import { TomographSelect } from "./components";

const TomographyContent = () => {
  const { image } = useTomography();

  return (
    <div class="flex gap-x-2">
      <div class="flex flex-col gap-y-2">
        <TomographSelect />
        <div>
          <p>Informacje o pliku</p>
          <p>Szerokość:</p>
          <p>Wysokość:</p>
          <p>RSME:</p>

          <p>Liczba detektorów:</p>
          <p>Liczba skanów:</p>
          <p>Rozpiętość:</p>
          <p>Filtrowanie:</p>
        </div>
      </div>
      <div class="w-[300px] h-[300px] p-2 flex justify-center bg-gray-800 opacity-80 rounded-md">
        {image() && (
          <img
            class="rounded-md"
            src={`/tomograph/photos/${image()}`}
            alt="Tomography image"
          />
        )}
      </div>
      <div class="w-[800px] h-[800px] flex justify-center bg-gray-800 opacity-80 rounded-md">
        <div class="w-[800px] p-2 flex justify-center items-center">
          <canvas width={256} height={256} />
        </div>
      </div>
    </div>
  );
};

export const Tomography = () => (
  <TomographyProvider>
    <TomographyContent />
  </TomographyProvider>
);
