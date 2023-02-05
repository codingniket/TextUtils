import React, { useState } from "react";

const About = () => {
  const [mystyle, Setmystyle] = useState({
    color: "white",
    backgroundColor: "black",
  });

  const [btnstate, Setbtnstate] = useState("Dark Mode");

  const enable = () => {
    if (mystyle.color === "white") {
      Setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      Setbtnstate("Dark Mode");
    } else {
      Setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      Setbtnstate("Light Mode");
    }
  };

  return (
    <div className="container" style={mystyle}>
      <h2>About</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
              Is this Website Free to us?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p>Yes</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
              Where Can I follow you?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p>Twitter: @GuyOn49 Linkedin: Niket Bachhawat</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
              Where did you learn this?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              <p>Youtube: Coding With Harry </p>
            </div>
          </div>
        </div>
      </div>
      <div className="conatainer">
        <button onClick={enable} type="button" className="btn btn-light my-3">
          {btnstate}
        </button>
      </div>
    </div>
  );
};

export default About;
