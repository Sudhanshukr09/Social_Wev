import React from 'react'
import LeftSec from './LeftSec';
import Feed from './Feed';
import RightSec from './RightSec';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className='flex w-full'>
        <LeftSec/>
        <Feed/>
        <RightSec/>
      </div>
    </>
  )
}

export default Home
