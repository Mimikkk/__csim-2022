import { Icon } from "@/shared/components";
import { Link } from "solid-app-router";
import "./Header.scss";

export const Header = () => (
  <header>
    <div>
      <Icon icon="abstract-018" class="fill-amber-300" />
      <Link href="/tomograph">Tomograf</Link>
      <Link href="/eye">Dno oka</Link>
      <Link href="/fihr">FIHR</Link>
    </div>
  </header>
);
