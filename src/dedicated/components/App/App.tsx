import type { Component } from "solid-js";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "./App.scss";
import { Route, Routes } from "solid-app-router";

export const App: Component = () => (
  <article>
    <Header />
    <nav />
    <main>
      <Routes>
        <Route path="/tomograph" element={<p>123</p>} />
        <Route path="/eye" element={<p>234</p>} />
        <Route path="/fihr" element={<p>345</p>} />
      </Routes>
    </main>
    <aside />
    <Footer />
  </article>
);
