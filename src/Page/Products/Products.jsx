import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Products(props) {
    return (
       <>
        <div>
            Products page
<input type="search" placeholder='Search ptoducts' />
        </div>
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet/>
       </>
    );
}


export default Products;