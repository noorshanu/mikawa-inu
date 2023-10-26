import React, { useRef } from "react";
import { AiTwotoneCopy } from "react-icons/ai";

function Token() {
  const textToCopy = "0xc9dbcff0448d330aaf1dd78fc204370e5e54a797";
  const textArea = useRef(null);
  const copyToClipboard = () => {
    textArea.current.select();
    document.execCommand("copy");
  };

  return (
    <section className=" mt-[300px] sm:mt-[800px]">
      <div className="container-wrapper">
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        >
          {" "}
          <h1 className="text-[#E476B2] text-2xl sm:text-6xl font-semibold text-center">
            Tokenomic
          </h1>
        </div>

        <div className=" flex justify-center items-center gap-10 my-8 flex-col sm:flex-row">
          <img src="images/buytax.png" alt="" />
          <img src="images/selltax.png" alt="" />

        </div>
        <img
          src="images/token.png"
          alt=""
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="2000"
          data-aos-easing="ease-in-sine"
        />
        <div className="flex justify-center gap-5">
          <input
            type="text"
            value={textToCopy}
            readOnly
            ref={textArea}
            className="text-white bg-transparent border border-gray-800 font-monot rounded-md py-1 w-[500px] px-4 text-xs mx-auto sm:mx-0  sm:text-lg"
          />
          <button
            onClick={copyToClipboard}
            className=" bg-transparent border border-gray-800 rounded-md py-1 px-3 btn-bg"
          >
            <AiTwotoneCopy />
          </button>
        </div>
        <div className="flex justify-center  gap-5 mt-7">
          <a
            href="/"
            className="btn-hero text-center w-[50%] sm:w-auto mx-auto sm:mx-0"
          >
            {" "}
            <img
              src="images/audited.png"
              alt=""
              className="mx-auto h-[30px] sm:h-auto sm:mt-2"
            />{" "}
          </a>
          <a
            href="/"
            className="btn-hero text-center w-[50%] sm:w-auto mx-auto sm:mx-0"
          >
            {" "}
            <img
              src="images/buyon.png"
              alt=""
              className="mx-auto h-[35px] sm:h-auto"
            />{" "}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Token;
