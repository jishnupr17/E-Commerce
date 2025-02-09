import React from 'react'
import {Check} from 'lucide-react'
import { Link } from 'react-router-dom'



const Pricing = ()=> {
  const pricing=[
    {
     imgUrl:"/img.jpg",
     title:'QUATERLY',
     price:'2000',
     lenth:'3'

    },
    {
     imgUrl:"/img.jpg",
     title:'half-YEAR',
     price:'6000',
     lenth:'6'

    },
    {
     imgUrl:"/img.jpg",
     title:'yearly',
     price:'10000',
     lenth:'12'

    },
  ]
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS</h1>
      <div className='wrapper'>
        
        {
         
         pricing.map(element=>{
          return(

            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PAKAGE</h1>
                <h3>${element.price}</h3>
                <p>FOR {element.lenth} Month</p>

              </div>
              <div className='description'>
               
                <p>
                  <Check/>All Day Free Training

                </p>
                <p>
                  <Check/>Personal Training Services

                </p>
                <p>
                  <Check/>Equipments

                </p>
                <p>
                  <Check/>Nutrition and Diet Support

                </p>
                <button className='btn' to={"/"}>join Now</button>

              </div>

            </div>
          )
         })

        }

      </div>

      
    </section>
  )
}

export default Pricing
