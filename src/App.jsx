import Ecosystem from "./components/Ecosystem"
import Hero from "./components/Hero"
import Navbar from "./components/NavbaR.JSX"
import NftMarket from "./components/NftMarket"


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
    </>
  )
}

export default App
