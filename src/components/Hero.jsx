import React from "react";

function Hero() {
  return (
    <section className=" pt-8">
      <div className="container-wrapper">
        <div className="flex flex-col sm:flex-row justify-between">
          <div>
            <h1 className="font-monot text-3xl sm:text-7xl font-bold">
              Digital Economy <br />
              <span className=" text-purple-600">The Power</span> Of Technology
            </h1>
            <p className=" text-sm sm:text-lg font-normal">
              Change The World Of Traditional Finance By Creating A Trusted
              Decentralized <br /> Platform Powered By Artificial Intelligence
              To Analyze Wealth Management Opportunities.
            </p>
            <div className=" flex gap-6 mt-5"> 
              <a href="/" className="btn-hero">Buy Now</a>
              <a href="/" className="btn-hero px-7">Chart</a>
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
