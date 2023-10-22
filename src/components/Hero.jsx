import React from "react";

function Hero() {
  return (
    <section className=" pt-8">
      <div className="container-wrapper">
        <div className="flex justify-between">
          <div>
            <h1 className="font-mono text-7xl font-bold">
              Digital Economy <br />
              <span className=" text-purple-600">The Power</span> Of Technology
            </h1>
            <p>
              Change The World Of Traditional Finance By Creating A Trusted
              Decentralized <br /> Platform Powered By Artificial Intelligence
              To Analyze Wealth Management Opportunities.
            </p>
            <div className=" flex gap-6"> 
              <a href="/">Buy Now</a>
              <a href="/">Chart</a>
            </div>
          </div>
          <div className=" text-end mx-auto">
            <img src="images/hero-img.png" alt="" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
