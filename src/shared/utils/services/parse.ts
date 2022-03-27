import { DataResponse } from "@/shared/utils";

export const parseResponse = <T>({ data }: DataResponse<T>) => data;
