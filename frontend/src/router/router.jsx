import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import DefaultLayout from "../layout/DefaultLayout";
import MyPage from "../pages/MyPage";
import SirFormPage from "../pages/SirFormPage";
import SirProfilePage from "../pages/SirProfilePage";
import SirViewPage from "../pages/SirViewPage";
import TownDetilePage from "../pages/TownDetilePage";
import TownPage from "../pages/TownPage";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/town",
        element: <TownPage />,
      },
      {
        path: "/towndetail/:id",
        element: <TownDetilePage />,
      },
      {
        path: "/sirform",
        element: <SirFormPage />,
      },
      {
        path: "/sirprofile",
        element: <SirProfilePage />,
      },
      {
        path: "/sirview",
        element: <SirViewPage />,
      },
      {
        path: "/mypage",
        element: <MyPage />,
      },
    ],
  },
]);

export default router;
