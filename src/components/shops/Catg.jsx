import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/apple.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/samsong.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/huwaei.png",
      cateName: "Huwaei",
    },
    {
      cateImg: "./images/category/sony.png",
      cateName: "Sony",
    },
    {
      cateImg: "./images/category/mi.png",
      cateName: "Xiaomi",
    },
    {
      cateImg: "./images/category/asus.png",
      cateName: "Asus",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
