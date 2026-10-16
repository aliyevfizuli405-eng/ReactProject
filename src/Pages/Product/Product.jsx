import React from 'react'

import { useState } from 'react'
import {ProductStyle} from "@/Pages/Product/productStyle/ProductStyle"
import { games } from '../../js/values'
export const Product = () => {
    const [oyun,setOyun]=useState(games[0])

  return (
    <ProductStyle game={oyun}/>
  )
}
