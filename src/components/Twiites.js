import React from 'react'
import CreateTweet from './CreateTweet'
import Posts from './Posts'

const Twiites = () => {
  return (
    <div className='tweets'>
       <div className="tweet__home">
         Home
       </div>
       <CreateTweet/>
       <Posts/>
       <Posts/>
       <Posts/>
       <Posts/>
       
    </div>
  )
}

export default Twiites