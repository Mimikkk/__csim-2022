import { Option, Select } from "@/shared/components";
import { values } from "rambda";
import { useTomography } from "@/components/Tomography/context";

const tomographyDefaultOption: Option = {
  label: "Wybierz zdjęcie...",
  value: "",
};

export const tomographyImages: Record<string, Option> = {
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

export const TomographSelect = () => {
  const { setImage } = useTomography();

  return (
    <Select
      label="Tomograf"
      default={tomographyDefaultOption}
      options={values(tomographyImages)}
      onChange={setImage}
    />
  );
};
