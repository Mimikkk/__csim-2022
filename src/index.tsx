import { render } from "solid-js/web";
import { App } from "@/App";
import "./index.scss";

const Root: HTMLElement = document.getElementById("root");
Root.ondrop = (event) => event.preventDefault();
render(App, Root);
