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
        <div class="tomography">
          <TomographyControls />
          <OutlineBox>
            <TomographyImage />
          </OutlineBox>
          <OutlineBox>
            <TomographyCanvas />
          </OutlineBox>
        </div>
      </CanvasProvider>
    </ControlsProvider>
  </TomographyProvider>
);
