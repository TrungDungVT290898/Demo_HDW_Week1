import { MenuItem, MenuList } from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { products } from '../fakeData'
function ProductPage() {
    const navigate = useNavigate();
    return (
        <div>

            <MenuList sx={{ width: "20%" }}>
                {
                    products.map(product =>
                    (
                        <MenuItem onClick={s => navigate(`/products/${product.id}`)} key={`item-${product.id}`}>
                            {product.title}
                        </MenuItem>)
                    )
                }
            </MenuList>


            <Outlet />
        </div>

    )
}

export default ProductPage