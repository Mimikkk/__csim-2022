import {
  Component,
  createContext as createSolidContext,
  useContext,
} from "solid-js";
export * from "./createContext";

export const createContext = <Args extends object, State extends object>(
  name: string,
  provider: () => State
): readonly [() => State, Component] => {
  const Context = createSolidContext<State>();

  const hook = () => {
    const context = useContext(Context);
    switch (context) {
      case undefined:
        throw Error(`Context must be used within ${name} Provider`);
      default:
        return context;
    }
  };

  const Provider = (props) => (
    <Context.Provider value={provider()}>{props.children}</Context.Provider>
  );

  return [hook, Provider] as const;
};
