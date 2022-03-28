export enum RequestStatus {
  Idle = "Idle",
  Loading = "Loading",
  Success = "Success",
  Failed = "Failed",
}

export module RequestStatus {
  export const isLoading = (...statuses: RequestStatus[]) =>
    statuses.some((status) => status === RequestStatus.Loading);

  export const isSuccess = (...statuses: RequestStatus[]) =>
    statuses.every((status) => status === RequestStatus.Success);

  export const isFailed = (...statuses: RequestStatus[]) =>
    statuses.some((status) => status === RequestStatus.Failed);

  export const isIdle = (...statuses: RequestStatus[]) =>
    statuses.some((status) => status === RequestStatus.Idle);

  export const aggregate = (...statuses: RequestStatus[]) =>
    isLoading(...statuses)
      ? RequestStatus.Loading
      : isFailed(...statuses)
      ? RequestStatus.Failed
      : isSuccess(...statuses)
      ? RequestStatus.Success
      : RequestStatus.Idle;
}
