import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";
import DefaultLayout from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
