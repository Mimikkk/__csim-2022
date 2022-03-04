import { values } from "rambda";
import { createSignal } from "solid-js";
import { Option, Select } from "@/shared/components";

const tomographyDefaultOption: Option = {
  label: "Wybierz zdjęcie...",
  value: "",
};
const tomographyImages: Record<string, Option> = {
  largeScout: { label: "Duży Scout", value: "CT_ScoutView-large.jpg" },
  scout: { label: "Scout", value: "CT_ScoutView.jpg" },
  circle: { label: "Koło", value: "Kolo.jpg" },
  dot: { label: "Kropka", value: "Kropka.jpg" },
  squares: { label: "Dwa kwadraty", value: "Kwadraty2.jpg" },
  stripes: { label: "Dwa paski", value: "Paski2.jpg" },
  saddle: { label: "Saddle", value: "SADDLE_PE.JPG" },
  largeSaddle: { label: "Duży Saddle", value: "SADDLE_PE-large.JPG" },
  sheppLogan: { label: "Shepp Logan", value: "Shepp_Logan.jpg" },
};

export const Tomography = () => {
  const [image, setImage] = createSignal("");

  return (
    <div class="flex gap-x-2">
      <div class="flex flex-col gap-y-2">
        <Select
          label="Tomograf"
          default={tomographyDefaultOption}
          options={values(tomographyImages)}
          onChange={setImage}
        />
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
      <div class="w-[300px] h-[300px] flex justify-center bg-gray-800 opacity-80 rounded-md">
        <div class="flex justify-center items-center">
          {image() && (
            <img
              class="rounded-md"
              src={`/tomograph/photos/${image()}`}
              alt="Tomography image"
            />
          )}
        </div>
      </div>
      <div class="w-[800px] h-[800px] flex justify-center bg-gray-800 opacity-80 rounded-md">
        <div class="flex justify-center items-center">
          {image() && (
            <img
              class="rounded-md"
              src={`/tomograph/photos/${image()}`}
              alt="Tomography image"
            />
          )}
        </div>
      </div>
    </div>
  );
};
