import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartTotal, removeFromCart } from '../../store/cartSlice';
import './CartItems.scss';

const CartItems = () => {

    const {cartItems }= useSelector(state => state.cartItems)
 

    const dispatch = useDispatch()

    const handleDelete = (id,size) => {
        dispatch(removeFromCart({id, size}))
        dispatch(cartTotal())
    }
    return (
        <div className="cart_items">
            {
                cartItems.map((i) => (
                    <div className="cart-item" key={i.id}>
            <img className="cart-item__img" src={i.img} alt=""/>
            <div className="cart-item__desc">
                <h2>{i.name}</h2>
                <p>{i.size}</p>
                <p className="cart-item-price">{i.price} &#8381;</p>

            </div>
            <img className="cart-item-delete" src="/icons/pink-delete.png" alt="" onClick={()=>handleDelete(i.id,i.size)}/>
        </div>
                ))
            }
        
   
       
    </div>
    );
};

export default CartItems;