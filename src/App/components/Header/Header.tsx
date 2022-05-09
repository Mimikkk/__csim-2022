import { Icon } from "@/shared/components";
import { Link, useLocation } from "solid-app-router";
import { FiArrowLeft } from "solid-icons/fi";
import { createMemo, For, Show } from "solid-js";
import "./Header.scss";

const urlDirectories = (pathname: string) =>
  pathname.split("/").map((part) => part.replace(/&.+/, ""));

const previousPage = (pathname: string) =>
  pathname
    .split("/")
    .filter((_, i, directiories) => i !== directiories.length - 1)
    .join("/");

export const Breadcrumbs = () => {
  const location = useLocation();
  const directories = createMemo(() => urlDirectories(location.pathname));
  const previous = createMemo(() => previousPage(location.pathname));
  const isHome = createMemo(() => location.pathname === "/");

  return (
    <Show when={!isHome()}>
      <Link href={previous()} class="flex justify-center items-center">
        <FiArrowLeft class="go-back-arrow" />
      </Link>
      <For each={directories()}>
        {(part, index) => {
          return (
            <div>
              <span class="select-none">/</span>
              <Link
                href={
                  index() !== directories().length - 1
                    ? directories()
                        .slice(1, index() + 1)
                        .join("/")
                    : location.pathname
                }
                class="cursor-pointer"
                classList={{
                  "text-gray-500": index() !== directories().length - 1,
                }}>
                {part ? part : "home"}
              </Link>
            </div>
          );
        }}
      </For>
    </Show>
  );
};

export const Header = () => (
  <header>
    <div>
      <Breadcrumbs />
    </div>
    <div>
      <Icon icon="abstract-018" class="fill-amber-300" />
      <Link href="/tomography">Tomograf</Link>
      <Link href="/eyes">Dno oka</Link>
      <Link href="/fhir">FHIR</Link>
    </div>
  </header>
);
