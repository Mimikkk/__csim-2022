export enum Status {
  Idle = "Idle",
  Loading = "Loading",
  Success = "Success",
  Failed = "Failed",
}

export module Status {
  export const isLoading = (...statuses: Status[]) =>
    statuses.some((status) => status === Status.Loading);

  export const isSuccess = (...statuses: Status[]) =>
    statuses.every((status) => status === Status.Success);

  export const isFailed = (...statuses: Status[]) =>
    statuses.some((status) => status === Status.Failed);

  export const isIdle = (...statuses: Status[]) =>
    statuses.some((status) => status === Status.Idle);

  export const aggregate = (...statuses: Status[]) =>
    isLoading(...statuses)
      ? Status.Loading
      : isFailed(...statuses)
      ? Status.Failed
      : isSuccess(...statuses)
      ? Status.Success
      : Status.Idle;
}
