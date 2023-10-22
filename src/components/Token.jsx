import React, { useRef } from 'react';

function Token() {
  const textToCopy = '0xc9dbcff0448d330aaf1dd78fc204370e5e54a797';
  const textArea = useRef(null);
  const copyToClipboard = () => {
   
    textArea.current.select();
    document.execCommand('copy');
  };

  return (
  <section className=' mt-[800px]'>
    <div className='container-wrapper'>
      <div> <h1 className='text-[#E476B2] text-6xl font-semibold text-center'>Tokenomic</h1></div>
      <img src="images/token.png" alt="" />
      <div className='flex justify-center gap-5'>
      <input
        type="text"
        value={textToCopy}
        readOnly
        ref={textArea}
        
        className='text-white'
      />
      <button onClick={copyToClipboard}>Copy</button>
      </div>
    </div>
  </section>
  )
}

export default Token