import { useRoutes } from "react-router-dom";
import { Home, About, Student } from "../pages";
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
      path: "/student",
      element: <Student />,
    },
  ]);
  return <div className="App">{elements}</div>;
}
export default Router;
