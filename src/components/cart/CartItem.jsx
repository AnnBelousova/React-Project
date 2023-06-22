import React from 'react'
import Item from './Item'
import axios from 'axios'

const CartItem = (props) => {

const onAddOverlay = async (obj) => {
	try{
		const findOverlay = props.overlayItems.find(objOver => objOver.myid === obj.myid)
		if(findOverlay){
			axios.delete(`https://647f7be5c246f166da90d2ea.mockapi.io/cart/${findOverlay.id}`)
			props.setOverlayItems((over) => over.filter(o=>o.myid !== obj.myid))
		}
		else{
			const {data} = await axios.post('https://647f7be5c246f166da90d2ea.mockapi.io/cart', obj)
			props.setOverlayItems(...props.overlayItems, data)
		}
	}
	catch{
		alert("Error")
	}
}

const onAddFav = async (obj) => {
	try{
		const findFavorites = props.overlayItems.find(objFav => objFav.myid === obj.myid)
		if(findFavorites){
			axios.delete(`https://647f7be5c246f166da90d2ea.mockapi.io/favorites/${findFavorites.id}`)
			props.setFavorites((over) => over.filter(o=>o.myid !== obj.myid))
		}
		else{
			const {data} = await axios.post('https://647f7be5c246f166da90d2ea.mockapi.io/favorites', obj)
			props.setFavorites(...props.favorites, data)
		}
	}
	catch{
		alert("Error")
	}
}

	return (
		<div className='conteiner py-3'>
		{
			props.item.map(obj=>{
				return(
					<Item
						key={obj.id}
						id={obj.id}
						myid={obj.myid}
						title={obj.title}
						description={obj.description}
						price={obj.price}
						img={obj.img}

						favBtn ={
							(favObj)=>{
								onAddFav(favObj)
							}
						}

						onPlus = {(cartObj) => {
							onAddOverlay(cartObj)
						}}
					/>
				)
			})
		}
</div>
	)
}

export default CartItem