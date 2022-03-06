import {
  Component,
  createContext as createSolidContext,
  useContext,
} from "solid-js";
export * from "./createContext";

export const createContext = <Props extends object, State extends object>(
  name: string,
  provider: ((props: Props) => State) | (() => State)
): readonly [() => State, Component<Props>] => {
  const Context = createSolidContext<State>();

  const hook = () => {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(`Context must be used within ${name} Provider`);
    }
    return context;
  };

  const Provider: Component<Props> = ({ children, ...props }) => (
    <Context.Provider value={provider(props as any)}>
      {children}
    </Context.Provider>
  );

  return [hook, Provider] as const;
};
