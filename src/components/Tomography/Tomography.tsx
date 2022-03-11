import { OutlineBox } from "@/shared/components";
import { ControlsProvider } from "./components/Controls/context";
import { TomographyProvider } from "./context";
import {
  TomographyControls,
  TomographyImage,
  TomographyReconstruction,
  TomographySinogram,
} from "./components";
import "./Tomography.scss";

export const Tomography = () => (
  <TomographyProvider>
    <ControlsProvider>
      <fieldset class="tomography">
        <TomographyControls />
        <OutlineBox class="grid grid-rows-2 gap-2">
          <OutlineBox label="Tomograf" centered>
            <TomographyImage />
          </OutlineBox>
          <OutlineBox label="Sinogram" centered>
            <TomographySinogram />
          </OutlineBox>
        </OutlineBox>
        <OutlineBox label="Rekonstrukcja" centered>
          <TomographyReconstruction />
        </OutlineBox>
      </fieldset>
    </ControlsProvider>
  </TomographyProvider>
);
