import { TomographSelect } from "./Select";
export const TomographyInfo = () => {
  return (
    <>
      <p>Szerokość:</p>
      <p>Wysokość:</p>
      <p>RSME:</p>
    </>
  );
};

export const TomographyParameters = () => {
  return (
    <>
      <p>Liczba detektorów:</p>
      <p>Liczba skanów:</p>
      <p>Rozpiętość:</p>
      <p>Filtrowanie:</p>
    </>
  );
};

export const TomographyControls = () => (
  <div>
    <TomographSelect />
    <TomographyInfo />
    <TomographyParameters />
  </div>
);
