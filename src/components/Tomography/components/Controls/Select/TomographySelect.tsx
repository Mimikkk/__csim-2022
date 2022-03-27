import { Button, Option, Select } from "@/shared/components";
import { values } from "rambda";
import { useControls } from "@/components/Tomography/components/Controls/context";
import { dicomService } from "@/components/Tomography/services/dicom";

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

const readfile = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

export const TomographSelect = () => {
  const { setOriginal } = useControls();

  return (
    <div class="flex w-full gap-2">
      <Select
        label="Tomograf"
        placeholder="Wybierz zdjęcie..."
        options={values(images)}
        onChange={async (path) => {
          const response = await fetch(path);
          const file = await response.blob();
          setOriginal(await readfile(file));
        }}
        class="flex-grow"
      />
      <Button
        class="flex-shrink"
        onDrop={async (file) => {
          if (file.name.endsWith(".dcm")) {
            const { image } = await dicomService.load(file);

            return setOriginal(image);
          }

          if (file.type.startsWith("image")) {
            return setOriginal(await readfile(file));
          }

          return alert(`Nieprawidłowy format pliku '${file.type}'`);
        }}>
        Upuść plik Dicom lub Obraz
      </Button>
    </div>
  );
};
