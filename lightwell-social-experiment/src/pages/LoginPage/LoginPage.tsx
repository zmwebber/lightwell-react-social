import Login from "../../components/LoginComponent/Login";
import LoginPageStyle from "./loginPageStyle.module.scss";

export function LoginPage() {
  return (
    <div className={LoginPageStyle.loginPageContainer}>
      <Login />
    </div>
  )
}