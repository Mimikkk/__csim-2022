import { Component } from "solid-js";
import "./OutlineBox.scss";

export const OutlineBox: Component = ({ children }) => (
  <div class="outline-box">{children}</div>
);
