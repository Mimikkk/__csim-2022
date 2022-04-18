import { useControls } from "@/components/Eyes/context";
import { LoadButton, Option, OutlineBox, Select } from "@/shared/components";
import { Status } from "@/shared/types";
import { values } from "rambda";
import { Component } from "solid-js";

const path = (name: string) => `eye/photos/${name}`;
const images: Record<string, Option> = {
  diabetic_retinography_1: { label: "Cukrzyk - 1", value: path("01_dr.JPG") },
  glaucomatous_1: { label: "Jaskra - 1", value: path("01_g.jpg") },
  healthy_1: { label: "Zdrowe - 1", value: path("01_h.jpg") },
  diabetic_retinography_2: { label: "Cukrzyk - 2", value: path("02_dr.JPG") },
  glaucomatous_2: { label: "Jaskra - 2", value: path("02_g.jpg") },
  healthy_2: { label: "Zdrowe - 2", value: path("02_h.jpg") },
  diabetic_retinography_3: { label: "Cukrzyk - 3", value: path("03_dr.JPG") },
  glaucomatous_3: { label: "Jaskra - 3", value: path("03_g.jpg") },
  healthy_3: { label: "Zdrowe - 3", value: path("03_h.jpg") },
  diabetic_retinography_4: { label: "Cukrzyk - 4", value: path("04_dr.JPG") },
  glaucomatous_4: { label: "Jaskra - 4", value: path("04_g.jpg") },
  healthy_4: { label: "Zdrowe - 4", value: path("04_h.jpg") },
  diabetic_retinography_5: { label: "Cukrzyk - 5", value: path("05_dr.JPG") },
  glaucomatous_5: { label: "Jaskra - 5", value: path("05_g.jpg") },
  healthy_5: { label: "Zdrowe - 5", value: path("05_h.jpg") },
  diabetic_retinography_6: { label: "Cukrzyk - 6", value: path("06_dr.JPG") },
  glaucomatous_6: { label: "Jaskra - 6", value: path("06_g.jpg") },
  healthy_6: { label: "Zdrowe - 6", value: path("06_h.jpg") },
  diabetic_retinography_7: { label: "Cukrzyk - 7", value: path("07_dr.JPG") },
  glaucomatous_7: { label: "Jaskra - 7", value: path("07_g.jpg") },
  healthy_7: { label: "Zdrowe - 7", value: path("07_h.jpg") },
  diabetic_retinography_8: { label: "Cukrzyk - 8", value: path("08_dr.JPG") },
  glaucomatous_8: { label: "Jaskra - 8", value: path("08_g.jpg") },
  healthy_8: { label: "Zdrowe - 8", value: path("08_h.jpg") },
  diabetic_retinography_9: { label: "Cukrzyk - 9", value: path("09_dr.JPG") },
  glaucomatous_9: { label: "Jaskra - 9", value: path("09_g.jpg") },
  healthy_9: { label: "Zdrowe - 9", value: path("09_h.jpg") },
  diabetic_retinography_10: { label: "Cukrzyk - 10", value: path("10_dr.JPG") },
  glaucomatous_10: { label: "Jaskra - 10", value: path("10_g.jpg") },
  healthy_10: { label: "Zdrowe - 10", value: path("10_h.jpg") },
  diabetic_retinography_11: { label: "Cukrzyk - 11", value: path("11_dr.JPG") },
  glaucomatous_11: { label: "Jaskra - 11", value: path("11_g.jpg") },
  healthy_11: { label: "Zdrowe - 11", value: path("11_h.jpg") },
  diabetic_retinography_12: { label: "Cukrzyk - 12", value: path("12_dr.JPG") },
  glaucomatous_12: { label: "Jaskra - 12", value: path("12_g.jpg") },
  healthy_12: { label: "Zdrowe - 12", value: path("12_h.jpg") },
  diabetic_retinography_13: { label: "Cukrzyk - 13", value: path("13_dr.JPG") },
  glaucomatous_13: { label: "Jaskra - 13", value: path("13_g.jpg") },
  healthy_13: { label: "Zdrowe - 13", value: path("13_h.jpg") },
  diabetic_retinography_14: { label: "Cukrzyk - 14", value: path("14_dr.JPG") },
  glaucomatous_14: { label: "Jaskra - 14", value: path("14_g.jpg") },
  healthy_14: { label: "Zdrowe - 14", value: path("14_h.jpg") },
  diabetic_retinography_15: { label: "Cukrzyk - 15", value: path("15_dr.JPG") },
  glaucomatous_15: { label: "Jaskra - 15", value: path("15_g.jpg") },
  healthy_15: { label: "Zdrowe - 15", value: path("15_h.jpg") },
};

const readfile = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });

export const EyeSelect: Component = () => {
  const { setOriginal, setVeins } = useControls();

  return (
    <div>
      <OutlineBox class="flex gap-2 flex-col">
        <div>
          <Select
            options={values(images)}
            label="Gotowe Zdjęcie"
            placeholder="Wybierz zdjęcie oka..."
            onChange={async (path) => {
              const original = await (await fetch(path)).blob();

              // const [filename] = path.split(".");
              // const veinsPath = `${filename}.tif`;

              setOriginal(await readfile(original));
              // setVeins(await readfile(veins));
            }}
          />
          <p>
            <strong>Wysokość</strong>: HEIGHTpx
          </p>
          <p>
            <strong>Szerokość</strong>: WIDTHpx
          </p>
        </div>
        <LoadButton
          class="w-full"
          status={Status.Success}
          onDrop={async (file) => {
            if (file.type.startsWith("image")) {
              return setOriginal(await readfile(file));
            }

            return alert(`Nieprawidłowy format pliku '${file.type}'`);
          }}>
          Upuść zdjęcie do klasyfikacji
        </LoadButton>
      </OutlineBox>
    </div>
  );
};
