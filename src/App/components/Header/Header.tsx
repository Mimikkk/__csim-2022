import { Icon } from "@/shared/components";
import { Link, useLocation } from "solid-app-router";
import { FiArrowLeft } from "solid-icons/fi";
import { Show } from "solid-js";
import "./Header.scss";

export const Header = () => {
  const location = useLocation();
  console.log({ location });
  return (
    <header>
      <div>
        <Show when={location.pathname !== "/"}>
          <Link href="../" class="flex justify-center items-center">
            <FiArrowLeft class="go-back-arrow" />
          </Link>
        </Show>
      </div>
      <div>
        <Icon icon="abstract-018" class="fill-amber-300" />
        <Link href="/tomography">Tomograf</Link>
        <Link href="/eyes">Dno oka</Link>
        <Link href="/fhir">FHIR</Link>
      </div>
    </header>
  );
};
