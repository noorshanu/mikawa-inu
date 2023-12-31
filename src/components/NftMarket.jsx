import React from "react";

function NftMarket() {
  return (
    <section className="mt-5 sm:mt-20">
      <div className="container-wrapper">
        <div>
          <div className=" flex justify-between items-center">
            <div data-aos="fade-left"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine">
              <span className="bg-white px-4 py-2 text-black rounded-lg text-xs sm:text-lg font-medium font-monot ">
                Features
              </span>
              <div className="flex gap-4 mt-5 mb-3">
                <img src="images/strok.png" alt="" className="h-[80px] sm:h-auto" />
                <h3 className="text-[#E476B2] text-2xl sm:text-6xl font-semibold lh-1_2 font-monot">
                  NFT <br />
                  Marketplace
                </h3>
              </div>
            </div>
            <div>
        
            </div>
          </div>
          <img src="images/nft.png" alt="" className=" -mt-10 sm:-mt-28" data-aos="fade-right"
     data-aos-offset="300" data-aos-duration="2000" 
     data-aos-easing="ease-in-sine"/>
        </div>
      </div>
    </section>
  );
}

export default NftMarket;
