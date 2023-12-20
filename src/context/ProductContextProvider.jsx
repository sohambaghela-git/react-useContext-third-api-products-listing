import React, {useState} from "react";
import ProductContext from "./ProductContext";


const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const fetchData = async () => {
        const apiUrl = 'https://dummyjson.com/products';
       
        const response = await fetch(apiUrl);
        const data = await response.json();
        // console.log(data);
        setProducts(data?.products);
    };

    React.useEffect(()=>{
        fetchData();
    },[])

    return(
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;