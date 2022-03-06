import { TomographyProvider } from "./context";
import { TomographyCanvas, TomographyControls } from "./components";
import "./Tomography.scss";
import { OutlineBox } from "@/shared/components";

const TomographyContent = () => (
  <div class="tomography">
    <TomographyControls />
    <OutlineBox>
      <TomographyCanvas />
    </OutlineBox>
    <OutlineBox>
      <TomographyCanvas />
    </OutlineBox>
  </div>
);

export const Tomography = () => (
  <TomographyProvider>
    <TomographyContent />
  </TomographyProvider>
);
