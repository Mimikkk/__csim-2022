import { Header, Footer, Main } from "./components";
import { Router } from "solid-app-router";
import "./App.scss";

export const App = () => (
  <Router>
    <Header />
    <Main />
    <Footer />
  </Router>
);
