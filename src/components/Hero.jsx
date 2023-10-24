import React from "react";

function Hero() {
  return (
    <section className=" pt-8">
      <div className="container-wrapper">
        <div className="flex flex-col sm:flex-row justify-between gap-5">
          <div data-aos="fade-left"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
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
          <div className=" text-end mx-auto relative" data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
            <img src="images/hero-coin2.png" alt="" className=" absolute right-[50%] floating sm:h-auto h-[40px]"/>
            <img src="images/hero-img2.png" alt="" className=" mx-auto sm:mx-0" />
            <img src="images/hero-coin.png" alt="" className="anime2 absolute top-[30%] -left-[8%] sm:-left-[10%] sm:h-auto h-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
