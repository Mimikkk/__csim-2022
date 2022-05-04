import { Identifier, Gender, HumanName } from "./base";
import { sortBy, trim, head } from "rambda";

export interface Patient {
  id: string;
  name: HumanName[];
  gender: Gender;
  birthDate?: Date;
  identifier: Identifier[];
}

export module Patient {
  export module Row {
    const givenS = (given?: string[]) => given?.join(" ") || "";
    const familyS = (family?: string) => family || "";
    const nameS = ({ family, given, text }: HumanName) =>
      trim(trim(`${givenS(given)} ${familyS(family)}`) || text || "");

    export const fullname = ({ name }: Patient) =>
      name?.map(nameS).join(" / ") || "";

    export const gender = ({ gender }: Patient): Gender => gender || "unknown";

    export const birthdate = ({ birthDate }: Patient) =>
      birthDate?.toLocaleString() || "-";

    export const identifier = ({ identifier }: Patient) => {
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
