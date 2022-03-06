import { Route, Routes } from "solid-app-router";
import { Tomography } from "./Tomography";
import { Eyes } from "./Eyes";
import { Fihr } from "./Fihr";

export const Main = () => (
  <main>
    <Routes>
      <Route path="/tomography" element={Tomography} />
      <Route path="/eyes" element={Eyes} />
      <Route path="/fihr" element={Fihr} />
    </Routes>
  </main>
);
