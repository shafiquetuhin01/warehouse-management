import { useEffect, useState } from "react";

const useProduct = () =>{
    const [products, setProducts] = useState([]);

    useEffect( ()=>{
        fetch('https://morning-peak-32661.herokuapp.com/collection')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);
    return [products, setProducts]
}

export default useProduct;
