import React from "react";
import DashBoard from "../../../components/DashBoard";
import SeachCompo from "../../../components/SearchComponent";
import ProductTableCompo from '../../../components/Tablecomponent/Product table component'
import { Link } from "react-router-dom";
import './style.css'

// import './style.css'

const StoreProduct = () => {
  return (
    <>
      <DashBoard sidebar>
        <div className='p32 pb0'>
          <div className='search-bar product-searchbar'> 
          <h1 className="order-name-name-order"> Product</h1>
           
          <div>
          <SeachCompo />
          </div>
          <div className='d-flex'>
            <div className='button-group ml16 btn-primary section-text-5 btn-product-new'>
            <Link to='Addproduct'>
            <div className='d-flex' style={{justifyContent:'flex-end'}}>
            <div className='button-group ml16 btn-primary section-text-5 btn-product-new'>
            <div className='btn-text'>Add Product</div>
            </div>
            </div>
            </Link>
            </div>
          </div>
          </div>
          <ProductTableCompo/> 
        </div>
        
      </DashBoard>
    </>
  );
};

export default StoreProduct;
