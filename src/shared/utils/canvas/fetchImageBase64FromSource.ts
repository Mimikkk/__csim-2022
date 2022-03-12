import { fetchCanvasFromSource } from "@/shared/utils";

export const fetchImageBase64FromSource = async (
  source: string
): Promise<string> => (await fetchCanvasFromSource(source))?.toDataURL() ?? "";
