import { Button, Option, OutlineBox, Select } from "@/shared/components";
import { values } from "rambda";

const $default: Option = {
  label: "Wybierz zdjęcie...",
  value: "",
};

const path = (name: string) => `tomograph/photos/${name}`;
const images: Record<string, Option> = {
  largeScout: { label: "Duży Scout", value: path("CT_ScoutView-large.jpg") },
  scout: { label: "Scout", value: path("CT_ScoutView.jpg") },
  circle: { label: "Koło", value: path("Kolo.jpg") },
  dot: { label: "Kropka", value: path("Kropka.jpg") },
  squares: { label: "Dwa kwadraty", value: path("Kwadraty2.jpg") },
  stripes: { label: "Dwa paski", value: path("Paski2.jpg") },
  saddle: { label: "Saddle", value: path("SADDLE_PE.JPG") },
  largeSaddle: { label: "Duży Saddle", value: path("SADDLE_PE-large.JPG") },
  sheppLogan: { label: "Shepp Logan", value: path("Shepp_Logan.jpg") },
};

export const TomographSelect = () => {
  return (
    <div>
      <Select
        label="Tomograf"
        default={$default}
        options={values(images)}
        // onChange={setImagepath}
        // value={imagepath()}
      />
    </div>
  );
};
