import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'

function Joinus() {
  return (
    <section>
<div className='container-wrapper'>
  <div className=' relative'>
    <img src="images/foot-up.png" alt="" />
    
<div className='conted absolute top-0 left-[3%]'>
  <div className=' text-center'>
    <h1 className=' text-[65px] font-semibold'>Join Us To Make The World A
Better Place</h1>
<p className='lh-1_6 text-xl'>
We are willing to listen to the community's opinions, for the purpose <br /> of 
developing useful products for users.
</p>
<div className=' flex gap-5 text-center justify-center mt-8'>
  <FaTelegramPlane className=' text-5xl'/>
  <a href="/" className=' bg-white py-3 text-2xl text-black font-semibold px-6 rounded-md '>Join our Community</a>
</div>
  </div>

</div>
  </div>

</div>
    </section>
  )
}

export default Joinus