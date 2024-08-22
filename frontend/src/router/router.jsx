import { createBrowserRouter } from "react-router-dom";
import MainPage from "../MainPage";

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
