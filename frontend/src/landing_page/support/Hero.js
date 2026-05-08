
import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{fontSize:"1.3rem"}}>Track Tickets</a>
      </div>
      <div className="row p-5">
        <div className="col-1"></div>
        <div className="col-6 p-3">
          <p className="mb-5" style={{fontSize:"1.8rem"}}>
            Search for an answer or browse help topics to create a ticket
          </p>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" ></input>
          <br />
          <a href="" className="p-3" style={{fontSize:"1.2rem"}}>Track account opening</a>
          <a href=""  className="p-3" style={{fontSize:"1.2rem"}}>Track segment activation</a>
          <a href=""  className="p-3" style={{fontSize:"1.2rem"}}>Intraday margins</a><br/>
          <a href="" className="p-3" style={{fontSize:"1.2rem"}}>Kite user manual</a>
        </div>
        <div className="col-5 p-5">
          <h1 className="fs-3" style={{fontSize:"1.2rem"}}>Featured</h1>
          <ol>
            <li>
              <a href="" style={{fontSize:"1.2rem"}}>Current Takeovers and Delisting - January 2024</a>
            </li><br/>
            <li>
              <a href="" style={{fontSize:"1.2rem"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
