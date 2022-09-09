 import React from 'react';
 import Navbar from './components/Navbar'; 
import Hero from './components/Hero'
import HeadCards from './components/HeadCards';
import Food from './components/Food';

function App() {
  return (
  <div className='bg-gray-600'>
    <Navbar />  
    <Hero />
    <HeadCards />  
    <Food />
  </div>

  );
}

export default App;


