import React from "react";

function Wallet() {
  return (
    <section className=" mt-5 sm:mt-20">
      <div className="container-wrapper relative">
        <div className=" flex justify-between items-center">
          <div data-aos="fade-left"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
            <span className="bg-white px-4 py-2 text-black rounded-lg text-xs sm:text-lg font-medium font-monot ">
              Features
            </span>
            <div className="flex gap-4 mt-5 mb-3">
              <img src="images/strok.png" alt="" className="h-[70px] sm:h-auto" />
              <h3 className="text-[#E476B2] text-2xl sm:text-6xl font-semibold lh-1_2 font-monot">
                Wallet
                <br />
                Development
              </h3>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" absolute sm:-top-2 top-20 ">
            <img src="images/wallet.png" alt=""  data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine"/>
        </div>
      </div>
    </section>
  );
}

export default Wallet;
