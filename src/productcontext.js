import React, { useState } from 'react';

let ProductContext=React.createContext();

export default ProductContext;

export const ProductProvider=({children})=>{
    const [productList,setProductList]=useState([])
    return <ProductContext.Provider value={{productList,setProductList}}>
        {children}
    </ProductContext.Provider>
}


