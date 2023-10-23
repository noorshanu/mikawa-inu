import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Joinus() {
  return (
    <section>
      <div className="container-wrapper">
        <div className=" relative">
          <img src="images/foot-up.png" alt="" className="hidden sm:block" />
          <img
            src="images/mob-foot-up.png"
            alt=""
            className="block sm:hidden"
          />

          <div className="conted absolute sm:top-[14%] top-[24%] sm:left-[9%] left-[5%] px-[5%]">
            <div className=" text-center">
              <h1 className=" text-xl sm:text-[65px] font-semibold lh-1_4">
                Join Us To Make The World <br /> A Better Place
              </h1>
              <p className="lh-1_6 text-base sm:text-xl">
                We are willing to listen to the community's opinions, for the
                purpose <br /> of developing useful products for users.
              </p>
              <div className=" flex gap-5 text-center justify-center mt-8">
                <FaTelegramPlane className=" text-4xl sm:text-5xl" />
                <a
                  href="/"
                  className=" bg-white py-3 text-sm sm:text-2xl text-black font-semibold px-6 rounded-md "
                >
                  Join our Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Joinus;
