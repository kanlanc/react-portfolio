import React, { Component } from "react";
import "./FifthComponent.css";
import image from "./profile.jpg";

class FirstComponent extends Component {
  render() {
    return (
      <div style={{ display: "block" }}>
        <section className="FifthComponent">
          <div style={{ width: "50%", margin: "0 auto", marginTop: "-8%" }}>
            <img
              className="FifthComponent__image"
              src={image}
              width="40%"
              height="40%"
              alt="Vikranth Kanumuru"
            />

            <p style={{ padding: "2rem 0", fontSize: "2rem" }}>
              Need a Freelancer, look no more. Reach out below.
            </p>
          </div>

          
          <div className="fifthComponent__socialMedia">
            <a
              href="mailto:saivicky2012@gmail.com"
              className="animated flipInY "
            >
              <i className="fa fa-envelope fa-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.github.com/highskillzz"
              target="__blank"
              className="animated flipInY "
            >
              <i className="fa fa-github fa-lg" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikranth-kanumuru-751a73125/"
              target="__blank"
              className="animated flipInY"
            >
              <i className="fa fa-linkedin fa-lg" aria-hidden="true" />
            </a>
            <a
              href="https://medium.com/@saivicky2015"
              target="__blank"
              className="animated flipInY"
            >
              <i className="fa fa-medium fa-lg" aria-hidden="true" />
            </a>
            <a href="#" className="animated flipInY">
              <i className="fa fa-file-pdf-o fa-lg" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default FirstComponent;
