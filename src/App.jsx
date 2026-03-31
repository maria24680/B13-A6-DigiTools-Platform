import { Suspense, useState } from 'react'
import './App.css'
import Nav from './Header/Navbar/Nav'
import Hero from './Header/Hero/Hero'
import Count from './Main/Counter/Count'
import Premiumtools from './Main/Premiumtools/Premiumtools'

function App() {
  
  const count=fetch('counter.json').then(res=>res.json())
  
  const premiumtools=fetch('premiumtools.json').then(res=>res.json())
  console.log(premiumtools)

  const [toggle,setToggle]=useState("products");

  return (
    <>
    

      <Nav></Nav>


      <Hero></Hero>

      <Suspense fallback={<span className='loading loading-spinner text-primary'></span>}>
      
      <Count count={count}></Count>
      
      </Suspense>

      {toggle === "products" &&
<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
>
  <Count count={count} />
</Suspense>
}


{/* premiumtools */}

<Suspense 
  fallback={
    <div className="flex h-64 w-full items-center justify-center">
      <span className="loading loading-spinner loading-xl text-primary"></span>
    </div>
  }
><Premiumtools toggle={toggle} active={active} setActive={setActive} setToggle={setToggle} premiumtools={premiumtools} selectedplans={selectedplans} setSelectedplans={setSelectedplans}></Premiumtools>

</Suspense>
    </>
  )
}

export default App
