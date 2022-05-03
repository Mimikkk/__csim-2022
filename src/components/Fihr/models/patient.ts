import { Identifier, Gender, HumanName } from "./base";

export interface Patient {
  name: HumanName[];
  gender: Gender;
  birthDate?: Date;
  identifier: Identifier[];
}
