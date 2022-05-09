import { useData } from "solid-app-router";
import { For } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Observation } from "@/components/Fhir/models";
import { Tracked } from "@/shared/hooks";
import { BiEdit } from "solid-icons/bi";
import { Labeled } from "@/shared/components/Labled";

export const CardObservationList = () => {
  const [data] = useData<Tracked<ReadResponse>>();

  return (
    <div class="col-span-9 max-h-[800px] overflow-y-auto flex gap-1 flex-col">
      <For each={data().observations}>
        {(o) => {
          const { category, time, description, value } = Observation.Card;

          return (
            <div class="bg-gray-800 p-4 border-t rounded-md animated grid grid-cols-12 gap-2">
              <div class="col-span-1">
                <BiEdit class="w-full h-full" />
              </div>
              <div class="col-span-11 flex flex-col">
                <Labeled label="Time" value={time(o)} />
                <Labeled label="Category" value={category(o)} />
                <Labeled label="Description" value={description(o)} />
                <Labeled label="Value" value={value(o)} />
              </div>
            </div>
          );
        }}
      </For>
    </div>
  );
};
