import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

//import './cart-dropdown.styles.scss';
import {CardDropdownConainer, EmptyMessage, CartItems} from './cart-dropdown.styles';
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CardDropdownConainer>
      <CartItems>
        {
          cartItems.length ? (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )
        }
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CardDropdownConainer>
  );
};

export default CartDropdown;