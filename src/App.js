import "./App.css";
import Footer from "./assets/footer/Footer";
import Navbar from "./assets/navbar/Navbar";
import SplashPage from "./assets/splashpage/SplashPage";
import Home from "./components/home/Home";
import Passwordreset from "./components/passwordreset/Passwordreset";
import Registration from "./components/registration/Registration";
import Signup from "./components/signup_signin/Signup";

function App() {
  return (
    <>
      {/* <SplashPage /> */}
      {/* <Signup /> */}
      {/* <Registration/> */}
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  );
}
export default App;
