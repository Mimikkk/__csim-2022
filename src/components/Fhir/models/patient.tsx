import { Identifier, Gender, HumanName, Base } from "./base";
import { sortBy, trim, head } from "rambda";
import { Component } from "solid-js";
import { Photo } from "@/components/Fhir/models/photo";

export interface Patient extends Base {
  name: HumanName[];
  gender: Gender;
  birthDate?: Date;
  identifier: Identifier[];
  photo?: Photo[];
}

export module Patient {
  const givenS = (given?: string[]) => given?.join(" ") || "";
  const familyS = (family?: string) => family || "";
  const nameS = ({ family, given, text }: HumanName) =>
    trim(trim(`${givenS(given)} ${familyS(family)}`) || text || "");

  export module Card {
    export const fullname = ({ name }: Patient) =>
      name?.map(nameS).join(" / ") || "";

    export const photo = ({ photo }: Patient) =>
      head(photo || []) ? Photo.toM(head(photo)) : null;

    export const gender = ({ gender }: Patient): Gender => gender || "unknown";

    export const birthdate = ({ birthDate }: Patient) =>
      birthDate?.toLocaleString() || "-";

    export const identifierTitle = ({ identifier }: Patient) => {
      if (!identifier) return "-";

      const { use, value } = head(
        sortBy(
          (id) => id?.use === "official",
          identifier.filter(({ value }) => !!value)
        )
      );

      return `${use || "unknown"} - ${value}`;
    };
  }

  export module Row {
    export const fullname = ({ name }: Patient) =>
      name?.map(nameS).join(" / ") || "";

    export const gender = ({ gender }: Patient): Gender => gender || "unknown";

    export const birthdate = ({ birthDate }: Patient) =>
      birthDate?.toLocaleString() || "-";

    export const identifierTitle = ({ identifier }: Patient) => {
      if (!identifier) return "-";

      const { use, value } = head(
        sortBy(
          (id) => id?.use === "official",
          identifier.filter(({ value }) => !!value)
        )
      );

      return `${use || "unknown"} - ${value}`;
    };

    export const identifier: Component<Patient> = ({ identifier }) => {
      if (!identifier) return "-";

      const { use, value } = head(
        sortBy(
          (id) => id?.use === "official",
          identifier.filter(({ value }) => !!value)
        )
      );

      return (
        <div class="flex">
          <span class="w-full">{use || "unknown"}</span>
          <span class="w-full">{value}</span>
        </div>
      );
    };
  }
}
