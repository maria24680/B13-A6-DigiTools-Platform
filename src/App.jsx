import { Suspense, useState } from 'react'
import './App.css'
import Hero from './Header/Hero/Hero'
import Nav from './Header/navbar/Nav'
import Count from './Main/Counter/Count'
import Premiumtools from './Main/Premiumtools/Premiumtools'
import Pricing from './Main/Pricing_sec/Pricing'
import Footer from './Footer/Footer'
import Started from './Main/Started/Started'
import Readytransform from './Footer/Readytransform'





function App() {
 
  const count=fetch('counter.json').then(res=>res.json())
  

  const premiumtools=fetch('premiumtools.json').then(res=>res.json())
  

  const [toggle,setToggle]=useState("products");

    const [selectedplans,setSelectedplans]=useState([])
    const [active,setActive]=useState(false);

  return (
 <>
{/* header */}
<Nav selectedplans={selectedplans}></Nav>



{toggle === "products" &&
<Hero></Hero>
}


{/* header */}


{/* main */}


{/* counter */}

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
{/* getstarted */}

{toggle === "products" &&
<Started></Started>
}

{/* pricing */}
{toggle === "products" &&
<Pricing></Pricing>
}
 {/* transform */}
 {toggle==="products" &&
<Readytransform></Readytransform>
}


{/* footer */}
{toggle==="products" &&
<Footer></Footer>
}
 </>

  )
}

export default App
