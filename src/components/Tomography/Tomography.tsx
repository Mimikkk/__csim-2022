import { OutlineBox } from "@/shared/components";
import { ControlsProvider } from "./components/Controls/context";
import { CanvasProvider } from "./components/Canvas/context";
import { TomographyProvider } from "./context";
import {
  TomographyCanvas,
  TomographyControls,
  TomographyImage,
} from "./components";
import "./Tomography.scss";

export const Tomography = () => (
  <TomographyProvider>
    <ControlsProvider>
      <CanvasProvider>
        <fieldset class="tomography">
          <TomographyControls />
          <OutlineBox centered>
            <TomographyImage />
          </OutlineBox>
          <OutlineBox centered>
            <TomographyCanvas />
          </OutlineBox>
        </fieldset>
      </CanvasProvider>
    </ControlsProvider>
  </TomographyProvider>
);
