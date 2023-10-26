import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Joinus() {
  return (
    <section className=" overflow-hidden">
      <div className="container-wrapper">
        <div className=" relative">
        <img src="images/join-circle.png" alt=""  className=" absolute -right-[15%] sm:-right-[7%] top-[20%] anime2 "/>
          <img src="images/foot-up.png" alt="" className="hidden sm:block" />
          <img
            src="images/mob-foot-up.png"
            alt=""
            className="block sm:hidden"
          />

          <div className="conted absolute sm:top-[14%] top-[24%] sm:left-[11%] left-[5%] px-[5%] " data-aos="fade-down"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
            <div className=" text-center">
              <h1 className=" text-xl sm:text-[65px] font-semibold lh-1_4 font-monot">
                Join Us To Make The World <br /> A Better Place
              </h1>
              <p className="lh-1_6 text-base sm:text-xl font-monot">
                We are willing to listen to the community's opinions, for the
                purpose <br /> of developing useful products for users.
              </p>
              <div className=" flex gap-5 text-center justify-center mt-8 relative">
                <FaTelegramPlane className=" text-4xl sm:text-5xl" />
                <a
                  href="/"
                  className=" bg-white py-3 text-sm sm:text-2xl text-black font-semibold px-6 rounded-md font-monot"
                >
                  Join our Community
                </a>
                <img src="images/join-coin.png" alt=""  className=" absolute -left-[20%] floating"/>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Joinus;
