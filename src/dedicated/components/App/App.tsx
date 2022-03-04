import type { Component } from "solid-js";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import "./App.scss";

export const App: Component = () => (
  <article>
    <Header />
    <Main />
    <Footer />
  </article>
);
