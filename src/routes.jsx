import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import Contact from "./pages/Contact";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];

export default routes;
