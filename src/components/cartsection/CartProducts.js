import React, { useState } from 'react'
import './CartProducts.css'
import '../mediaQueries/mediaQueries.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove} from '../../store/cartSlice'


const CartProducts = () => {
    const [value, setValue] = useState(1);
    const dispatch = useDispatch();
    const Products = useSelector((state)=> state.cart);
    const handleRemove = (productId) => {
        dispatch(remove(productId))
    }
    const handlechange = (val) =>{
        setValue(val.target.value)
       
    }
  return (
    <div>
       {/* Cart section  */}
    <section id="cart" className="section-p1">

        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>

            </thead>
            <tbody>
                {
                    Products.map((product =>
                     <tr key={product.id}>
                    <td><a href="#"><i className="far fa-times-circle" onClick={handleRemove}></i></a></td>
                    <td><img src={product.img} alt=""/></td>
                    <td>{product.name}</td>
                    <td>{product.price}$</td>
                    <td><input type="number" onChange={handlechange} min='1' value={value}/></td>
                    <td>{product.price * value }$</td>
                </tr>
                ))
            }
                

            </tbody>
        </table>
    </section>

    {/* Cart-add Section */}
    <section id="cart-add" className="section-p1">

        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter your coupon"/>
                <button className="normal">Apply</button>
            </div>
        </div>
            <div id="subTotal">
                <h3>Cart Total</h3>
                <table>
                    <tr>
                        <td>Cart Subtotal</td>
                        <td>$335</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>Free</td>
                    </tr>
                    <tr>
                        <td><strong>Total</strong></td>
                        <td><strong>$335</strong></td>
                    </tr>
                </table>
                <button className="normal">Proceed to Checkout</button>
            </div>
    </section>
    </div>
  )
}

export default CartProducts
