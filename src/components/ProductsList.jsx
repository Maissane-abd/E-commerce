import React from 'react'
import {useSelector, useDispatch} from "@reduxjs/toolkit"
import {getProductsList} from "../features/products"

export default function ProductsList() {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    if (!products.item){
        dispatch(getProductsList())
    }
  return (
    <div className="px-6">
        <h1 className="text-slate-100 text-2xl mb-6">Here are our products</h1>
        <ul className="grid min-[500px]:grid-cols-2 md:grid-cols-3 gap-4">
            {products.item && products.items.map(el => (
                <li key={el.id} className="p-4 bg-slate-200 rounded">
                    <img 
                    className="mb-4"
                    src={`/images/${el.img}.png`} 
                    alt={el.title}/>
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-slate-700 text-lg">{el.title}</p>
                        <p className="text-slate-900 font-bold">{el.price}</p>
                    </div>
                    <button className={`${
                  el.picked ? "bg-green-700" : "bg-slate-600"
                } w-full text-slate-100 px-2 inline-flex items-center justify-center rounded p-2 mr-2`}>
                        {el.picked ? "Item picked !" : "Add to cart"}
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}
