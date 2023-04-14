import React, {useEffect, useState} from "react";
import * as ProductService from "../service/ProductService";

function ProductList() {
const [productList,setProductList] = useState([]);
const [productType,setProductType] = useState([]);
const [searchQuery,setSearchQuery] = useState("");
useEffect(() => {
    const listProduct = async () => {
        let result = await ProductService.findAll();
        setProductList(result)
        return productList
    }
    const listProductType = async () => {
        let result = await ProductService.findAllType();
        setProductType(result)
        return productType
    }
    listProduct()
    listProductType()
},[]);
    const handleSearch = async (query) => {
    let result = await ProductService.findAll(query);
    setProductList(result)
        setSearchQuery(query);
        console.log(query);
    }
    const handleDelete = async (id) => {
        await ProductService.deleteProduct(id)
        let result = await ProductService.findAll();
        setProductList(result)
 }
 if (!productList){
     return <p>Loading ...</p>
 }
 return (
     <div>
         <div>
             <h1>Product List</h1>
         </div>
         <input
         type={"text"}
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
         placeholder={"Search Product"}
         />
         <button onClick={() => handleSearch(searchQuery)}>Search </button>
         <div>
             <table className={"table table-border table-striped"}>
                 <thead>
                 <tr>
                     <th>Name</th>
                     <th>Price</th>
                     <th>Type</th>
                     <th colSpan={2}>Actions</th>
                 </tr>
                 </thead>
                 <tbody>
                 {productList.map((product,index) => (
                     <tr key={index}>
                         <th>{product.name}</th>
                         <th>{product.price}</th>
                         <th>
                             {
                                 productType?.filter(pt => pt.id === product.productType)[0]?.name
                             }
                         </th>
                         <th>
                             <a className={"btn btn-danger"} onClick={() => handleDelete(product.id)}>Delete</a>
                         </th>
                     </tr>
                 ))}
                 </tbody>
             </table>
         </div>
     </div>
 )
}
export default ProductList
