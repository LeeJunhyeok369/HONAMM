import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AuthModal from "../components/AuthModal";
import SignupModal from "../components/SignupModal";
import Footer from "./footer";

function DefaultLayout() {
  const { isModalOpen, modalType } = useSelector((state) => state.modal);

  return (
    <div className="min-h-screen min-w-[1440px]">
      <Outlet />
      {isModalOpen && modalType === "login" && <AuthModal />}
      {isModalOpen && modalType === "signup" && <SignupModal />}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
