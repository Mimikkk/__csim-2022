import { Route, RouteDataFuncArgs, Routes } from "solid-app-router";
import { Eyes, Fhir, Tomography } from "@/components";
import { PatientCard } from "@/components/Fhir/components";
import { createTracked } from "@/shared/hooks";
import { patientService } from "@/components/Fhir/services";

const patientLoader = ({ params }: RouteDataFuncArgs) =>
  createTracked({
    fn: () => patientService.read(params.id),
    instant: true,
  });

export const Main = () => (
  <main>
    <Routes>
      <Route path="/tomography" element={Tomography} />
      <Route path="/eyes" element={Eyes} />
      <Route path="/fhir" element={Fhir} />
      <Route path="/fhir/:id" element={PatientCard} data={patientLoader} />
    </Routes>
  </main>
);
