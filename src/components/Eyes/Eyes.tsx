import { LoadButton, OutlineBox } from "@/shared/components";
import { EyeSelect, Technique } from "@/components/Eyes/components";
import { useControls, ControlsProvider } from "./context";
import { Show } from "solid-js";
import "./Eyes.scss";

export const Content = () => {
  const {
    original,
    veins,
    traditional,
    createTraditional,
    traditionalStatus,
    tree,
    createTree,
    treeStatus,
    cnn,
    createCnn,
    cnnStatus,
  } = useControls();

  return (
    <fieldset class="eye">
      <div>
        <EyeSelect />
        <OutlineBox class="flex flex-col gap gap-2">
          <LoadButton
            onClick={createCnn}
            status={cnnStatus()}
            disabled={!original()}>
            Użyj sieci neuronowej
          </LoadButton>
          <LoadButton
            onClick={createTree}
            status={treeStatus()}
            disabled={!original()}>
            Użyj wycinków drzewa decyzyjnego
          </LoadButton>
          <LoadButton
            onClick={createTraditional}
            status={traditionalStatus()}
            disabled={!original()}>
            Użyj technik klasycznych
          </LoadButton>
        </OutlineBox>
      </div>
      <OutlineBox label="Oryginał" class="grid gap-2" centered={!original()}>
        <Show when={original()} fallback="Wybierz zdjęcie...">
          <OutlineBox label="Obraz" centered>
            <img
              class="max-w-[350px] flex-grow rounded"
              alt="original image to process"
              src={original()}
            />
          </OutlineBox>
          <OutlineBox label="Maska ekspercka" centered>
            <Show when={veins()} fallback="Zdjęcie nie ma mapy eksperckiej...">
              <img
                class="max-w-[350px] flex-grow rounded"
                alt="original expert created image's veins if has any"
                src={veins()}
              />
            </Show>
          </OutlineBox>
        </Show>
      </OutlineBox>
      <div class="grid gap-2">
        <Technique
          description="Użyj sieci neuronowej..."
          label="Sieć neuronowa"
          status={cnnStatus()}
          image={cnn()}
        />
        <Technique
          description="Użyj wycinków drzewa decyzyjnego..."
          label="Wycinki drzewa decyzyjnego"
          status={treeStatus()}
          image={tree()}
        />
        <Technique
          description="Użyj technik tradycyjnych..."
          label="Tradycyjne"
          status={traditionalStatus()}
          image={traditional()}
        />
      </div>
    </fieldset>
  );
};

export const Eyes = () => (
  <ControlsProvider>
    <Content />
  </ControlsProvider>
);
