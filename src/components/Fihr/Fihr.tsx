import { createContext } from "@/shared/utils";
export const [useContext, ContextProvider] = createContext("Tomography", () => {
  return {};
});

export const Fihr = () => {
  return <p>todo - 14.06.2022</p>;
};
