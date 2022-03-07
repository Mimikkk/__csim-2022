import { ControlsProvider } from "./components/Controls/context";
import { TomographyProvider } from "./context";
import {
  TomographyCanvas,
  TomographyControls,
  TomographyImage,
} from "./components";
import { OutlineBox } from "@/shared/components";
import "./Tomography.scss";

const TomographyContent = () => (
  <div class="tomography">
    <TomographyControls />
    <OutlineBox>
      <TomographyImage />
    </OutlineBox>
    <OutlineBox>
      <TomographyCanvas />
    </OutlineBox>
  </div>
);

export const Tomography = () => (
  <TomographyProvider>
    <ControlsProvider>
      <TomographyContent />
    </ControlsProvider>
  </TomographyProvider>
);
