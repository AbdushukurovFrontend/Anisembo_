import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Login from "./Project/components/Login";
import Profil from "./Project/components/Profil/Profil";
import Chat from "./Project/components/Chat";
import Rotlayout from "./Project/Rotlayout/Rotlayout";
import Home from "./Project/pages/Home/Home";
import Allnewcard from "./Project/pages/Home/Allnewcard";
import Detals from "./Project/pages/Derails/Deatals";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "profil",
      element: <Profil />,
    },
    {
      path: "chat",
      element: <Chat />,
    },
    {
      path: "details/:id",
      element: <Detals />,
    },
    {
      path: "/allnewCard/details/:id",
      element: <Detals />,
    },
    {
      path: "/",
      element: <Rotlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "allnewCard",
          element: <Allnewcard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
