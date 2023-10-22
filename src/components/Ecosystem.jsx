import React from "react";

function Ecosystem() {
  return (
    <section className="pt-10">
      <div className="container-wrapper">
        <div className=" flex justify-between items-center">
          <div>
            <span className="bg-white px-4 py-2 text-black rounded-lg text-lg font-medium font-monot ">
              Features
            </span>
            <div className="flex gap-4 mt-5">
              <img src="images/strok.png" alt="" />
              <h3 className="text-[#E476B2] text-6xl font-semibold lh-1_2">Mikawa Inu Ecosystem</h3>
            </div>
          </div>
          <div>
            <img src="images/eco-1.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
