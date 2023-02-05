//import './App.css';
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";


// let name = "Niket";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>
  {
    setAlert({
        msg:message,
        type:type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode on","success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode on","success")
    }
  };
  return (
    <>
    {/* <Router> */}
    <div>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
    </div>
      {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />} /> */}

       {/* <Route exact path="/" element={} /> */}
      <TextForm showAlert={showAlert} heading="Enter The text to analyse Below" mode={mode} />

     {/* </Routes> */}
     {/* </Router> */}
    </>
);
}

export default App;