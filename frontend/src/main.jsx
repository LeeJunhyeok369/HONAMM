import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { QueryClientSetup } from "./layout/QueryClientSetup";
import store from "./redux/store";
import "./reset.css";
import router from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientSetup>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientSetup>
  </StrictMode>
);
