import React from "react";
import { data } from "../restApi.js";

const Services = () => {
  return (
    <section className="who_are_we" id="who_are_we">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div
          className="text_banner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {data[0].who_we_are.slice(0, 2).map((element) => (
            <div className="card" key={element.id}>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "300",
                }}
                className="heading"
              >
                {element.number}
              </h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
        <div className="image_banner">
          <img src="/center.svg" alt="center" className="gradient_bg" />
          <img src="/whoweare.png" alt="who" />
        </div>
        <div
          className="text_banner"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {data[0].who_we_are.slice(2).map((element) => (
            <div className="card" key={element.id}>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: "300",
                }}
                className="heading"
              >
                {element.number}
              </h1>
              <p>{element.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
