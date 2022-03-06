import { Router } from "solid-app-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import "./App.scss";

export const App = () => (
  <article>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </article>
);
