import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/home";
import Signup from "./pages/signup";
import EmailVerification from "./pages/email-verification";
import LoginPage from "./auth/login-business/Login";
import SignupTalent from "./pages/signup-talent";
import LoginTalent from "./auth/login-talent/LoginTalent";
import ResetPasswordPage from "./auth/reset-password/ResetPassword";
import ResetLink from "./auth/reset-password/ResetLink";
import ResetLinks from "./auth/reset-password/ResetLinks";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SignUp
            checkboxChecked={false}
            toggleCheckbox={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/login-business" element={<LoginPage />} />
      <Route path="/signup-talent" element={<SignupTalent />} />
      <Route path="/login-talent" element={<LoginTalent />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/reset-link" element={<ResetLink />} />
      <Route path="/reset-links" element={<ResetLinks />} />
    </Routes>
  );
};

export default AppRoutes;
