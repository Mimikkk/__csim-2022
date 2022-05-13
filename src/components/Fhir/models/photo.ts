import { Media } from "@/shared/types";

export interface Photo {
  data: string;
  contentType: string;
}

export module Photo {
  export const toM = (photo: Photo): Media =>
    `data:${photo.contentType};base64,${photo.data}`;
}
