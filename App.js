import { StatusBar } from "expo-status-bar";
// import { Home } from './src/screens/home';
import { Login } from "./src/screens/sign";
import { ForgotPassword } from "./src/screens/forgotpassword";
export default function App() {
  return (
    <>
      <ForgotPassword />
      {/* <Home /> */}
      {/*<Login />*/}
      <StatusBar style="auto" />
    </>
  );
}
