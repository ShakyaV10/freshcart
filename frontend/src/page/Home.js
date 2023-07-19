import React, { useRef } from "react";
import HomeCard from '../Component/HomeCard';
import { useSelector } from 'react-redux';
import CardFeature from '../Component/CardFeature';
import {GrPrevious,GrNext} from "react-icons/gr";
import AllProduct from "../Component/AllProduct";

const Home = () => {
  const productData = useSelector((state)=>state.product.productList);
  const homeProductCardList = productData.slice(14,19);
  const homeProductCartListVegetables = productData.filter(el => el.category === "vegetable",[])

  const loadingArray = new Array(4).fill(null)
  const loadingArrayFeature = new Array(10).fill(null)

  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200

  }
  const prevProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }


  


  

  return (
    <div className='p-2 md:p-4'>
      <div className="md:flex gap-4 py-2">

       <div className="md:w-1/2 ">
        {/* <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
          <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
          <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" alt="" className="h-7"/>
        </div> */}
        <h2 className="text-green-600 text-4xl md:text-7xl font-bold py-3">FreshCart<br></br><span className="text-black text-5xl">Freshness at your Doorstep</span></h2>
        <p className="py-3 text-base">Fresh Cart is an online e-commerce site specializing in grocery and food items, offering a convenient and hassle-free shopping experience. With a wide selection of fresh produce, pantry staples, and gourmet treats, customers can easily browse and order their favorite products from the comfort of their homes. The platform ensures the highest quality and freshness of its products, partnering with trusted local suppliers and adhering to strict quality control measures. </p>
        <button className="font-bold bg-green-500 text-slate-100 px-4 py-2 rounded">Order Now</button>
      </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            homeProductCardList[0] ? homeProductCardList.map(el =>{
              return(
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              );
            })
            :
            loadingArray.map((el,index)=>{
              return(
                <HomeCard
                 key={index+"loading"}
                 loading={"Loading..."}
                />
              )
            })
          }
          </div>
      </div>

      <div className=''>
          <div className='flex w-full items-center'>
            <h2 className="font-bold text-2xl text-slate-800 mb-4">Farm-fresh produce, straight to your kitchen</h2>
            <div className='ml-auto flex gap-3'>
              <button onClick={prevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious/></button>
              <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext/></button>
            </div>
          </div>
          <div className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all" ref={slideProductRef}>
            {
              homeProductCartListVegetables[0] ? homeProductCartListVegetables.map(el =>{
                return(
                  <CardFeature
                   key={el._id+"vegetable"}
                   id={el._id}
                   name={el.name}
                   category={el.category}
                   price={el.price}
                   image={el.image}
                  />
                );
              })

              :
              loadingArrayFeature.map((el,index) => <CardFeature loading="Loading..." key={index+"cart"}/>)
            }
          </div>
        </div>

        <AllProduct heading={"Shop smart, skip the queue - order now"}/>
        
    </div>
  )
}

export default Home