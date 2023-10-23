import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'

function Joinus() {
  return (
    <section>
<div className='container-wrapper'>
  <div className=' relative'>
    <img src="images/foot-up.png" alt="" className='hidden sm:block'/>
    <img src="images/mob-foot-up.png" alt="" className='block sm:hidden'/>
    
<div className='conted absolute top-0 left-[14%]'>
  <div className=' text-center'>
    <h1 className=' text-2xl sm:text-[65px] font-semibold'>Join Us To Make The World <br /> A
Better Place</h1>
<p className='lh-1_6 text-xl'>
We are willing to listen to the community's opinions, for the purpose <br /> of 
developing useful products for users.
</p>
<div className=' flex gap-5 text-center justify-center mt-8'>
  <FaTelegramPlane className=' text-4xl sm:text-5xl'/>
  <a href="/" className=' bg-white py-3 text-sm sm:text-2xl text-black font-semibold px-6 rounded-md '>Join our Community</a>
</div>
  </div>

</div>
  </div>

</div>
    </section>
  )
}

export default Joinus