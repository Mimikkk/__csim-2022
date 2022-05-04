import { Route, Routes } from "solid-app-router";
import { Eyes, Fhir, Tomography } from "@/components";
import { createResource } from "solid-js";
import { PatientCard } from "@/components/Fhir/components";

function UserData({ params }) {
  const [user] = createResource(
    () => params.id,
    (id) => id
  );

  return user;
}

export const Main = () => (
  <main class="p-2">
    <Routes>
      <Route path="/tomography" element={Tomography} />
      <Route path="/eyes" element={Eyes} />
      <Route path="/fhir" element={Fhir} />
      <Route path="/fhir/:id" element={PatientCard} data={UserData} />
    </Routes>
  </main>
);
