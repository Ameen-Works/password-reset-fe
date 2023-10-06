import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Success from "./Success";
import PasswordResetForm from "./PasswordResetForm";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<SignupForm />}></Route>
      <Route exact path="/login" element={<LoginForm />}></Route>
      <Route exact path="/success" element={<Success />}></Route>
      <Route
        exact
        path="/password-reset-link"
        element={<PasswordResetForm />}
      ></Route>
      <Route path="/password-reset/:token" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
