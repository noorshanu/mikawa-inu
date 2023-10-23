import React from 'react'

function Roadmap() {
  return (
   <section className=' py-5'>
    <div className='relative hidden sm:block'>
      
        <div className=' absolute -top-[5%] left-[15.4%]'> 
          <img src="images/phase1.png" alt="" />
        </div>
        <div  className=' absolute -top-[5%] left-[50.4%]'>
          <img src="images/phase3.png" alt="" />
        </div>
      <div>
        <img src="images/roadmap.png" alt="" />
      </div>

      <div className=' absolute top-[52%] left-[32.4%]'> 
          <img src="images/phase2.png" alt="" />
        </div>
        <div  className=' absolute top-[52%] left-[68%]'>
          <img src="images/phase4.png" alt="" />
        </div>
       
    </div>
    <div className='container-wrapper sm:hidden block'>
      

    </div>
   </section>
  )
}

export default Roadmap