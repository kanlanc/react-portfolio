import React, { Component } from "react";
import "./SecondComponent.css";

class SecondComponent extends Component {
  render() {
    return (
      <div>
        <section className="SecondComponent">
          <div className="SecondComponent1">
            <h1
              style={{
                textAlign: "center",
                paddingTop: "3rem",
                lineHeight: "9rem",
                fontSize: "9rem",
                letterSpacing: ".2rem",
                fontWeight: "300"
              }}
            >
              Skills at a Glance
            </h1>

            <div className="SecondComponent__icons">
              <i className="col devicon-javascript-plain colored SecondComponent__icon__style" />
              <i className="col devicon-react-original-wordmark colored SecondComponent__icon__style" />
              <i className="col devicon-nodejs-plain-wordmark colored SecondComponent__icon__style" />
              <i className="col devicon-express-original-wordmark SecondComponent__icon__style" />
              <i className="col devicon-python-plain-wordmark colored SecondComponent__icon__style" />
              <i className="col devicon-sass-original colored SecondComponent__icon__style" />
              <i className="col devicon-docker-plain-wordmark colored SecondComponent__icon__style" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SecondComponent;
