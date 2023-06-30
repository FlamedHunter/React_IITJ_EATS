import "./App.css";
import Profile from "./components/profile/Profile";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/profile" element={<Profile/>} />      
        </Routes>
      </Router>
    </>

  );
}
export default App;
