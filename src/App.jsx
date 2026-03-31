import { Suspense, useState } from 'react'
import './App.css'
import Nav from './Header/navbar/Nav'
import Hero from './Header/Hero/Hero'
import Count from './Main/Counter/count'
import { SpaceIcon } from 'lucide-react'

function App() {
  
  const count=fetch('counter.json').then(res=>res.json())
  
  console.log(count)

  return (
    <>
    

      <Nav></Nav>


      <Hero></Hero>

      <Suspense fallback={<span className='loading loading-spinner text-primary'></span>}>
      
      <Count count={count}></Count>
      
      </Suspense>


    </>
  )
}

export default App
