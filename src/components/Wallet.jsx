import React from "react";

function Wallet() {
  return (
    <section className=" mt-20">
      <div className="container-wrapper relative">
        <div className=" flex justify-between items-center">
          <div>
            <span className="bg-white px-4 py-2 text-black rounded-lg text-lg font-medium font-monot ">
              Features
            </span>
            <div className="flex gap-4 mt-5 mb-3">
              <img src="images/strok.png" alt="" />
              <h3 className="text-[#E476B2] text-6xl font-semibold lh-1_2">
                Wallet
                <br />
                Development
              </h3>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" absolute -top-2">
            <img src="images/wallet.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Wallet;
