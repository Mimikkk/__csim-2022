import { Route, Routes } from "solid-app-router";
import { Eyes, Fihr, Tomography } from "@/components";

export const Main = () => (
  <main>
    <Routes>
      <Route path="/tomography" element={Tomography} />
      <Route path="/eyes" element={Eyes} />
      <Route path="/fihr" element={Fihr} />
    </Routes>
  </main>
);
