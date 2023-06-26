import "./App.css";
import Footer from "./assets/footer/Footer";
import Navbar from "./assets/navbar/Navbar";
import SplashPage from "./assets/splashpage/SplashPage";
import Passwordreset from "./components/passwordreset/Passwordreset";
import Registration from "./components/registration/Registration";
import Signup from "./components/signup_signin/Signup";

function App() {
  return (
    <>
      {/* <SplashPage /> */}
      {/* <Signup /> */}
      <Navbar/>
      <Registration/>
      <Footer/>
    </>
  );
}
export default App;
