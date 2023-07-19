import React from 'react';
import {FaSistrix} from "react-icons/fa";
import TrendsKeyword from './TrendsKeyword';

const Trends = () => {
  return (
   
    <div className='trends '>
      <div className='trends__search'>
        <input type="text" className='trend__control' 
         placeholder='Search Twtter' />
      </div>
      <TrendsKeyword/>
    </div>

  )
}

export default Trends