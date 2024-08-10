import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alerts, setAlerts] = useState(null);
  const [modes, setMode] = useState("dark");

  const [modes1, setMode1] = useState("dark");

  const showAlert = (msg, type) => {
    setAlerts({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlerts(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (modes === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode is off", "primary");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#242f4a";
      showAlert("dark mode is on", "primary");
    }
  };

  const toggleMode2 = () => {
    if (modes1 === "dark") {
      setMode1("light");
      document.body.style.backgroundColor = "white";
      showAlert("dark mode is off", "success");
    } else {
      setMode1("dark");
      document.body.style.backgroundColor = "#133f0e";
      showAlert("dark mode is on", "success");
    }
  };

  return (
    <Router>
      <>
        <Navbar
          title="WriteHere"
          about="about us"
          mode={modes}
          mode1={modes1}
          togglemode={toggleMode}
          togglemode2={toggleMode2}
        />{" "}
        <Alert alert={alerts} />{" "}
        <div className="container my-3">
          {" "}
          <Routes>
            {" "}
            <Route exact path="/about" element={<About mode={modes} />} />{" "}
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter your text"
                  mode={modes}
                  mode1={modes1}
                />
              }
            />{" "}
          </Routes>{" "}
        </div>{" "}
      </>{" "}
    </Router>
  );
}

export default App;
