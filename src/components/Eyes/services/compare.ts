import { createApiUrl } from "@/shared/services";
import axios from "axios";
import { DataResponse, parseResponse } from "@/shared/utils";

const ApiUrl = createApiUrl("eyes");

interface CompareRequest {
  processed: string;
  expert: string;
}

interface CompareStatistics {
  confusion: string;
  specificity: number;
  sensitivity: number;
  accuracy: number;
  geometric: number;
}

export const compareService = {
  compare: (processed: string, expert: string) =>
    axios
      .post<CompareRequest, DataResponse<CompareStatistics>>(
        `${ApiUrl}/compare`,
        { processed, expert }
      )
      .then(parseResponse),
};
