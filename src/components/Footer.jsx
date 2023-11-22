import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'

function Footer() {
  return (
  <section>
    <div className='container-wrapper'>
      <div className=' flex relative'>
    <div className=' absolute'>
      <img src="images/foot-logo.png" alt="" className='h-[130px] hidden sm:block anime2' />
    </div>
    <div className=' relative'>
      <div className=' absolute top-[7%] sm:top-[50%] left-[40%] sm:left-[4%]'>
        <div className=' flex flex-row sm:flex-col gap-5'>
          <a href="/"> <FaTelegramPlane className=' text-2xl'/></a>
          <a href="/"> <BsTwitter className=' text-2xl'/></a>
          <a href="/"><BsInstagram className=' text-2xl'/></a>
          <a href="https://bscscan.com/token/0x725d1918b30a6c073c5cb7108f400f8ebccc8f95" target='_blank'>
            <img src="images/bsc.svg" alt="" className='h-[26px]' />
          </a>
        </div>

      </div>
      <img src="images/footer.png" alt="" className=' hidden sm:block' />
      <img src="images/mob-foot.png" alt="" className='block sm:hidden' />
      <div className=' absolute top-[17%] sm:top-[15%] w-auto sm:w-[1000px] left-[7%] sm:left-[14%]'>
        <div className='container-wrapper'>
        <div className='flex justify-around flex-col sm:flex-row'>
          <div className=' flex flex-col '>
            <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot'>Whitepaper</a>
            <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot' >About us</a>
            <a href="/" className=' text-xl font-medium lh-1_9 font-monot'>Contact us</a>
          </div>

          <div className=' flex flex-col'>
          <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot'>Mikawa Inu EcoSystem</a>
          <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot'>Web 3.0 Platform</a>    
          <a href="/" className=' text-xl font-medium lh-1_9 font-monot'>NFTs MarketPlace</a>
          </div>

          <div className=' flex flex-col'>
          <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot'>Mikawa - Chain</a>
          <a href="/" className=' text-xl font-medium lh-1_9 mb-4 font-monot'>Tokenomics</a>
          <a href="/" className=' text-xl font-medium lh-1_9 font-monot'>Wallet development</a>
          </div>

       
        </div>
        <div className=' flex justify-around mt-4 sm:mt-[3rem] items-center flex-col sm:flex-row'>
          <p className=' text-base font-medium font-monot'>All Rights Reserved 2022</p>
          <img src="images/audit.png" alt="" />

        </div>
        

        </div>
      </div>
    </div>
      </div>

    </div>
  </section>
  )
}

export default Footer