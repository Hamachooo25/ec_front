import React from 'react'
import Hero from "../components/Hero"
import ProductCard from '../components/ProductCard'

const Top = () => {

const productData = [
  {
  id:1, productName:'Shampoo', shopName: "Yuta .inc", price:"$100.00",
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Yuta ', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Roky', shopName: "cornerstone .inc", price:"$100.00"
},
{id:2, productName:'Kazu', shopName: "cornerstone .inc", price:"$1000.00"
},
];

  return (
    <>
    {/*トップページをここに記述 */}
    <div>
      <div className="">
        {/*トップセクション */}
        <Hero/>
      </div>
      <div className="flex flex-wrap justify-center m-6">
          {productData.map((product) => (
            <ProductCard
              key={product.id}
              productName={product.productName}
              shopName={product.shopName}
              price={product.price}
            />
          ))}
        </div>
    </div>
    </>
  )
}

export default Top
