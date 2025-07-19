import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./src/pages/DashBoard";
import App from "./src/App";
import About from "./src/pages/About";
import Contact from "./src/pages/Contact";
import Work from "./src/pages/Work";
import Layout from "./src/component/Layout";

const router = createBrowserRouter([
    {
        path: "/",
                children: [
                {
                    path: "/",
                    element: <DashBoard/>
                },
            {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/contact",
            element: <Contact/>,
        },
        {
            path: "/work",
            element: <Work/>
        }
    ]
    }
])
export default router;