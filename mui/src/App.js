import "./App.css";
import AppBar from "./AppBar.js";
import ClippedDrawer from "./Drawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Setting from "./Setting";

function App() {
  return (
    <div>
      <Router>
        <AppBar />
        <ClippedDrawer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/settings" element={<Setting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
