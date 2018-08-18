import React, { Component } from "react";
import "./FourthComponent.css";

class FourthComponent extends Component {
  render() {
    return (
      <div className="FourthComponent">
        <section className="FourthComponent1">
          <div style={{marginBottom:"2rem"}}>
            <a
              href="https://medium.com/@saivicky2015"
              target="__blank"
              className="animated flipInY" style={{ fontSize: "6rem"}}
            >
              <i className="fa fa-medium"  aria-hidden="true" />
            </a>

            <h2>Recent Medium Publications</h2>
          </div>
          <div>
            <ul style={{fontWeight: "300",textAlign:"left",width:"40%",margin:"0 auto" }}>
              <li>Using Augumented Reality to give Birthday Wishes</li>
              <li>Exploring GraphQl : A Comprehensive Guide part-1</li>
              <li>IndexDB Adventure Part-1</li>
              <li>Why JWT shouldn’t be stored in Local Storage</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default FourthComponent;
