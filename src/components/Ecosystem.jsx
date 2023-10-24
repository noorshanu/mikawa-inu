import React from "react";

function Ecosystem() {
  return (
    <section className="pt-10">
      <div className="container-wrapper">
        <div className=" flex justify-between flex-col sm:flex-row ">
          <div data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
            <span className="bg-white px-4 py-2 text-black rounded-lg text-lg font-medium font-monot ">
              Features
            </span>
            <div className="flex gap-4 mt-5">
              <img src="images/strok.png" alt="" className=" sm:h-auto h-[100px]" />
              <h3 className="text-[#E476B2] text-2xl sm:text-6xl font-semibold lh-1_2">Mikawa <br /> Inu <br /> Ecosystem</h3>
            </div>
          </div>
          <div>
            <img src="images/eco-1.png" alt="" className=" sm:mt-[4rem]" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
