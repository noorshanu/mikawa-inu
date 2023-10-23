import Ecosystem from "./components/Ecosystem"
import Hero from "./components/Hero"
import Joinus from "./components/Joinus"
import Navbar from "./components/Navbar"

import NftMarket from "./components/NftMarket"
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
<div className=" flex text-center justify-center gap-5">
  <h1 className=" font-medium text-3xl font-monot">Mikawa Inu Ecosystem</h1>
  <img src="images/star.png" alt="" />
  <h1 className=" font-medium text-3xl font-monot">Mikawa Inu Ecosystem</h1>
</div>
</div>
<div className=" py-4">
  <Ecosystem/>
  
</div>
<div className=" py-8">
  <NftMarket/>
</div>
<div className="py-8">
  <Wallet/>

</div>
<div className=" py-8">
  <Token/> 

</div>
<div>
  {/* <Roadmap/> */}
</div>
<div className=" py-8">
  <Partners/>
</div>
<div className=" py-8">
<Joinus/>
</div>
    </>
  )
}

export default App
