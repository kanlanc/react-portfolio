import React, { Component } from "react";
import "./FirstComponent.css";
import Typist from "react-typist";
import video from "./video.mp4";

class FirstComponent extends Component {
  render() {
    return (
      <section className="FirstComponent">
        <div className="bg-video">
          <video
            className="bg-video__content"
            autoPlay
            muted
            loop
            defaultPlaybackRate=".5"
          >
            <source src={video} type="video/mp4" />
            Your browser is not supported!!
          </video>
        </div>
        <div className="socialMedia">
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
        <div className="typist">
          <Typist>
            <span>Hi. I'm Vikranth</span>
            <Typist.Backspace count={8} delay={200} />
            <span> a Full Stack Web Developer</span>
            <Typist.Backspace count={26} delay={200} />
            <span> a Smart Contracts Developer</span>
            <Typist.Backspace count={27} delay={100} />
            <span> a AR Developer</span>
            <Typist.Backspace count={14} delay={100} />
            <span> Vikranth</span>
            <Typist.Delay ms={500} />
            <br />
            <span style={{ fontSize: "2.5rem" }}>I am a developer</span>
          </Typist>
        </div>
      </section>
    );
  }
}

export default FirstComponent;
