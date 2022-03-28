import { createEffect, createSignal, on } from "solid-js";
import { RequestStatus } from "@/shared/types";
import { createRefresh } from "./createRefresh";

interface Props<T, Y = null> {
  fn: (prev: T | Y) => Promise<T | Y>;
  default?: Y;
  instant?: true;
}

export const createTracked = <T, Y = null>(props: Props<T, Y>) => {
  const [status, setStatus] = createSignal<RequestStatus>(RequestStatus.Idle);
  const [toggled, refresh] = createRefresh(props.instant);
  const [resource, setResource] = createSignal<T | Y>(
    props.default === undefined ? null : props.default
  );

  createEffect(
    on(toggled, async (run) => {
      if (!run) return;

      setStatus(RequestStatus.Loading);
      setResource(() => (props.default === undefined ? null : props.default));
      try {
        const $new = await props.fn(resource());
        setResource(() => $new);
        setStatus(RequestStatus.Success);
      } catch {
        setStatus(RequestStatus.Failed);
      }
    })
  );

  return [resource, status, refresh] as const;
};
