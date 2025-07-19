import { createBrowserRouter } from "react-router-dom";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Work from "./src/pages/Work";
import Layout from "./src/component/Layout";
import DashBoard from "./src/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/work",
        element: <Work />,
      },
    ],
  },
]);
export default router;
