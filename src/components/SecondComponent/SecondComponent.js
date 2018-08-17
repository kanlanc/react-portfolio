import React, { Component } from "react";
import "./SecondComponent.css";

class SecondComponent extends Component {
  render() {
    return (
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
            <i class="col devicon-javascript-plain colored SecondComponent__icon__style" />
            <i class="col devicon-react-original-wordmark colored SecondComponent__icon__style" />
            <i class="col devicon-nodejs-plain-wordmark colored SecondComponent__icon__style" />
            <i class="col devicon-express-original-wordmark SecondComponent__icon__style"></i>
            <i class="col devicon-python-plain-wordmark colored SecondComponent__icon__style" />
            <i class="col devicon-sass-original colored SecondComponent__icon__style"></i>
            <i class="col devicon-docker-plain-wordmark colored SecondComponent__icon__style"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default SecondComponent;
