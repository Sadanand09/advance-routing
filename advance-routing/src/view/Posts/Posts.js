import React from 'react'
import CardData from '../utils/Data.json'
import Card from '../../Card/Card'


function Posts() {
  return (
    <div>
      <div>
        {
          CardData.map((info, index) => {
            return(
              <div>
                <Card key={index}  id={info.id} img={info.img} name={info.name} info={info.info}/>
              </div>
            )
          })

        }
      
      </div>
    </div>
  )
}

export default Posts