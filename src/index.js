import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Controller from "./Components/Controller";
import { Toaster } from "react-hot-toast";
import Blog from "./Pages/Blog";
import Template from "./Pages/Template";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider context={helmetContext}>
      <Toaster position="top-right"></Toaster>
      <Routes>
        <Route element={<Controller />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Template />} />
        </Route>
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
