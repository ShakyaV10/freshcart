import React from 'react'
import HomeCard from '../Component/HomeCard'
import { useSelector } from 'react-redux'

const Home = () => {
  const productData = useSelector((state)=>state.product.productList)
  console.log(productData)
  const homeProductCardList = productData.slice(14,19)
  return (
    <div className='p-2 md:p-4'>
      <div className="md:flex gap-4 py-2">

       <div className="md:w-1/2 ">
        <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
          <p className="text-sm font-medium text-slate-900">Bike Delivery</p>
          <img src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png" className="h-7"/>
        </div>
        <h2 className="text-4xl md:text-7xl font-bold py-3">The Fastest Delivery to <span className="text-green-600 text-">Your Kitchen</span></h2>
        <p className="py-3 text-base">Fresh Cart is an online e-commerce site specializing in grocery and food items, offering a convenient and hassle-free shopping experience. With a wide selection of fresh produce, pantry staples, and gourmet treats, customers can easily browse and order their favorite products from the comfort of their homes. The platform ensures the highest quality and freshness of its products, partnering with trusted local suppliers and adhering to strict quality control measures. </p>
        <button className="font-bold bg-green-500 text-slate-100 px-4 py-2 rounded">Order Now</button>
      </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            homeProductCardList[0] && homeProductCardList.map(el =>{
              return(
                <HomeCard
                  key={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              )
            })
          }
          </div>
      </div>

      <div className=''>
          <h2 className="font-bold text-2xl text-slate-800 ">Fresh Vegetables</h2>
          <div className="">

          </div>
        </div>
    </div>
  )
}

export default Home