import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { Experience } from "./components/pages/Experience";
import { About } from "./components/pages/About";
import { Works } from "./components/pages/Works";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "experience", Component: Experience },
      { path: "about", Component: About },
      { path: "works", Component: Works },
    ],
  },
]);
