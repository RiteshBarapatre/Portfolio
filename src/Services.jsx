import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="my-3">
        Our Services
      </h1>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
