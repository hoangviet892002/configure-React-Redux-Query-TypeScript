import { useRoutes } from "react-router-dom";
import { Home, About, Data } from "../pages";
function Router() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/data",
      element: <Data />,
    },
  ]);
  return <div className="App">{elements}</div>;
}
export default Router;
