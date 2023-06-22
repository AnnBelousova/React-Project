import React, { useState } from 'react'
import {AppContext} from '../../App'


const Item = (props) => {

const context = React.createContext(AppContext)

const [added, setAdded] = useState(context.isAdded);
const [fav, setFav] = useState(false);

const onClickFav = () => {
	setFav(!fav);
	let id = props.id;
	let myid = props.myid;
	let title = props.title;
	let price = props.price;
	let description = props.description;
	let img = props.img;
	props.favBtn({title, description, price,img, id, myid});
}

const onClickAdd = () => {
	setAdded(!added);
	let id = props.id;
	let myid = props.myid;
	let title = props.title;
	let price = props.price;
	let description = props.description;
	let img = props.img;
	props.onPlus({title, description, price,img, id, myid});
}



	return (
		<div className='container py-3'>
		<main>
			<div className='row row-cols-1 justify-content-evenly row-cols-md-3 row-cols-sm-2 text-center'>
				<div className='col px-3 py-3'>
				<div className='card md-6 rounded'>
				<div className='card-header py-2 px-3'>

					{
						context.isFav(props.myid) == true ?

					<button type='button' className='w-100 btn btn-lg btn-primary'
					onClick={onClickFav}>
						Добавлен в избранное
					</button>
					: 
					<button type='button' className='w-100 btn btn-lg btn-primary'
						onClick={onClickFav}>
						Добавить в избранное
					</button>
					}

					<p>{props.title}</p>
					<img src={props.img} width={'85%'} alt='img'></img>
					<p>{props.description}</p>
					<p>{props.price}</p>


					<button type='button' className='w-100 btn btn-lg btn-primary'
					  onClick={onClickAdd}>
						{
							context.isAdded(props.myid)?
							<img width={15}
							src={context.isAdded(props.myid)? '/img/icon.png': ''} alt=""/> : 'Добавить в корзину'}
					</button>



				</div>
				</div>
				</div>
			</div>
		</main>
	</div>
	)
}

export default Item