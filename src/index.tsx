import { render } from "solid-js/web";
import "tailwindcss/tailwind.css";
import "./index.scss";
import { App } from "@/dedicated/components";
import { Router } from "solid-app-router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
