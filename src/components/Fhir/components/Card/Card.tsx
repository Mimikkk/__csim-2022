import { useData } from "solid-app-router";
export const PatientCard = () => {
  const data = useData();

  return <div>{data}</div>;
};
