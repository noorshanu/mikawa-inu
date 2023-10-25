import Ecosystem from "./components/Ecosystem"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Joinus from "./components/Joinus"
import Navbar from "./components/Navbar"
import Marquee from "react-fast-marquee";
// import NftMarket from "./components/NftMarket"
import Partners from "./components/Partners"
import Roadmap from "./components/Roadmap"
import Token from "./components/Token"
import Wallet from "./components/Wallet"


function App() {
  

  return (
    <>
<Navbar/>
<div>
  <Hero/>
</div>
<div className="line-hero  py-4">
<Marquee>
<div className=" flex text-center justify-center gap-5  ml-5">
  <h1 className=" font-medium text-base sm:text-3xl font-monot">Mikawa Inu Ecosystem</h1>
  <img src="images/star.png" alt="" className=" h-[20px] sm:h-auto w-[20px] sm:w-auto  mx-auto sm:mx-0" />
  <h1 className=" font-medium text-base sm:text-3xl font-monot">Mikawa Inu Ecosystem</h1>
</div>
<div className=" flex text-center justify-center gap-5 ml-5 ">
  <h1 className=" font-medium text-base sm:text-3xl font-monot"> Mikawa Inu Ecosystem </h1>
  <img src="images/star.png" alt="" className=" h-[20px] sm:h-auto w-[20px] sm:w-auto  mx-auto sm:mx-0" />
  <h1 className=" font-medium text-base sm:text-3xl font-monot">Mikawa Inu Ecosystem </h1>
</div>

<div className=" flex text-center justify-center gap-5 ml-5 ">
  <h1 className=" font-medium text-base sm:text-3xl font-monot"> Mikawa Inu Ecosystem </h1>
  <img src="images/star.png" alt="" className=" h-[20px] sm:h-auto w-[20px] sm:w-auto  mx-auto sm:mx-0" />
  <h1 className=" font-medium text-base sm:text-3xl font-monot">Mikawa Inu Ecosystem </h1>
</div>
</Marquee>
</div>
<div className=" py-4">
  <Ecosystem/>
  
</div>
{/* <div className=" py-8">
  <NftMarket/>
</div> */}
<div className="py-8">
  <Wallet/>

</div>
<div className=" py-8">
  <Token/> 

</div>
<div className="py-8">
  <Roadmap/>
</div>
<div className=" py-8">
  <Partners/>
</div>
<div className=" py-8">
<Joinus/>
</div>
<div className=" py-8">
<Footer/>

</div>
    </>
  )
}

export default App
