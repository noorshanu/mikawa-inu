import React, { useRef } from 'react';
import {AiTwotoneCopy} from 'react-icons/ai'

function Token() {
  const textToCopy = '0xc9dbcff0448d330aaf1dd78fc204370e5e54a797';
  const textArea = useRef(null);
  const copyToClipboard = () => {
   
    textArea.current.select();
    document.execCommand('copy');
  };

  return (
  <section className=' mt-[300px] sm:mt-[800px]'>
    <div className='container-wrapper'>
      <div> <h1 className='text-[#E476B2] text-2xl sm:text-6xl font-semibold text-center'>Tokenomic</h1></div>
      <img src="images/token.png" alt="" />
      <div className='flex justify-center gap-5'>
      <input
        type="text"
        value={textToCopy}
        readOnly
        ref={textArea}
        
        className='text-white bg-transparent border border-gray-800 rounded-md py-1 w-[500px] px-4 text-xs mx-auto sm:mx-0  sm:text-lg'
      />
      <button onClick={copyToClipboard} className=' bg-transparent border border-gray-800 rounded-md py-1 px-3 btn-bg'><AiTwotoneCopy/></button>
      </div>
      <div className='flex justify-center gap-5'>
        <a href="/"> Audit By </a>
        <a href="/"> Audit By </a>
      </div>
    </div>
  </section>
  )
}

export default Token

