import { Icon, LinkIcon } from "@/shared/components";
import "./Footer.scss";

export const Footer = () => (
  <footer>
    <div>
      <LinkIcon link="https://github.com/Mimikkk/solid-ts" icon="github" />
      <LinkIcon link="https://discord.gg/GSE43yH63T" icon="discord" />
    </div>
    <div>
      <Icon icon="abstract-003" class="link fill-amber-300" />
      <p class="opacity-50">IwM - Daniel Zdancewicz 2022</p>
    </div>
  </footer>
);
