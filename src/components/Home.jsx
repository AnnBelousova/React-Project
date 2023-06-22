import React from 'react'
import Slider from './Slider';
import CartItem from './cart/CartItem';

const Home = (props) => {
	return (
		<div>
    <Slider></Slider>
    <CartItem item={props.item}
			overlayItems={props.overlayItems}
			favorites={props.overlayItems}
			setFavorites={props.setFavorites}
		/>
		</div>
	)
}

export default Home