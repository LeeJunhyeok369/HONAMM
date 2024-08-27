import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import AuthModal from "../components/AuthModal";
import SignupModal from "../components/SignupModal";
import { restoreAuthState } from "../redux/authSlice";
import Footer from "./footer";

function DefaultLayout() {
  const { isModalOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(restoreAuthState({ token, user: JSON.parse(user) }));
    }
  }, [dispatch]);

  const shouldRenderFooter = location.pathname !== "/sirform";

  return (
    <div className="min-h-screen min-w-[1224px] overflow-hidden">
      <Outlet />
      {isModalOpen && modalType === "login" && <AuthModal />}
      {isModalOpen && modalType === "signup" && <SignupModal />}
      {shouldRenderFooter && <Footer />} {/* 조건부 Footer 렌더링 */}
    </div>
  );
}

export default DefaultLayout;
