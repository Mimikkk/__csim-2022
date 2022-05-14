import { useData } from "solid-app-router";
import { Component, createMemo, Show } from "solid-js";
import { ReadResponse } from "@/components/Fhir/services";
import { Status } from "@/shared/types";
import { Spinner } from "@/shared/components";
import { Tracked } from "@/shared/hooks";
import {
  CardHeader,
  CardMedicationList,
  CardObservationList,
  CardPhoto,
} from "./components";
import "./Card.scss";
import { SolidApexCharts } from "solid-apexcharts";
import cx from "classnames";
import { Observation } from "@/components/Fhir/models";

interface Props {
  class?: string;
}

const { toSeries } = Observation.Chart;
const options = {
  theme: { palette: "palette4" },
  tooltip: { theme: "dark" },
  title: { text: "Obserwacje w czasie", style: { color: "##1f2937" } },
  xaxis: { type: "datetime" },
};

export const TimeChart: Component<Props> = (props) => {
  const [data] = useData<Tracked<ReadResponse>>();
  const series = createMemo(() => toSeries(data().observations));

  return (
    <div class={cx(props.class, "flex justify-center chart")}>
      <SolidApexCharts
        height={400}
        options={options}
        type="line"
        series={series()}
      />
    </div>
  );
};

export const PatientCard = () => {
  const [, status] = useData<Tracked<ReadResponse>>();

  return (
    <section class="w-full h-full flex flex-col items-center">
      <Show
        when={Status.isSuccess(status())}
        fallback={<Spinner centered class="w-48 h-48" />}>
        <CardHeader />
        <div class="grid grid-cols-12 py-4 gap-2 w-full max-w-[1200px]">
          <CardPhoto class="col-span-3 w-full" />
          <CardObservationList class="col-span-5 max-h-[400px]" />
          <CardMedicationList class="col-span-4 max-h-[400px]" />
          <TimeChart class="col-span-12" />
        </div>
      </Show>
    </section>
  );
};
