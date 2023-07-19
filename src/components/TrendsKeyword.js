import React, { useState } from 'react'

const TrendsKeyword = () => {

const [state,setState] = useState([
    {
        id:1,
        country:"Trend in India",
        keyword:"ISPR",
        totaKeywords:"200k"
    },
    {
        id:2,
        country:"Trend in India",
        keyword:"NCR",
        totaKeywords:"300k"
    },
    {
        id:3,
        country:"Trend in India",
        keyword:"NT-NCR",
        totaKeywords:"500k"
    }
])

  return (
    <div className='keywords'>
      <div className='key'>
       <div className='keyword__heading'>
          <h4>Trends for You</h4>
       </div>
       {
        state.map((keyword) =>{
            return(
           <div key={keyword.id}>
              <div className='country'>
                  {keyword.country}
              </div>
              <div className='keyword__name'>
                  <strong>{keyword.keyword}</strong>
              </div>
              <div className='keyword__tweets'>
                {keyword.totaKeywords}
              </div>
           </div>)
        })
       }
      </div>
    </div>
  )
}

export default TrendsKeyword