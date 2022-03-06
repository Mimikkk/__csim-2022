import { Icon } from "@/shared/components";
import { Link } from "solid-app-router";
import "./Header.scss";

export const Header = () => (
  <header>
    <div>
      <Icon icon="abstract-018" class="fill-amber-300" />
      <Link href="/tomography">Tomograf</Link>
      <Link href="/eyes">Dno oka</Link>
      <Link href="/fihr">FIHR</Link>
    </div>
  </header>
);
