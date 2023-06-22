import React from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css';
import {MapContainer, Marker, TileLayer, Popup, CircleMarker, Polygon} from 'react-leaflet';

const center = [45.812447, 9.083262]
const colorOptions = {color:'purple'}
const centerPolygon = [
	[45.814189, 9.077844],
	[45.809284, 9.078960],
	[45.810181, 9.089345],
	[45.817754, 9.087337]
	]
const Form = () => {

	const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
	return (
		<div>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
		<h1>Заполните заявку для обратной связи</h1>
		<div className='input-group mb-3'>
		
		<input {...register ('lastName',
			{	
			required: true,
			maxLength:50,
			pattern:/^[A-za-z]+$/i
			}
		)}
			type="text"
			className='form-control'
			placeholder='Фамилия'/>
			<input {...register ('firstName',
			{	
			required: true,
			maxLength:50,
			pattern:/^[A-za-z]+$/i
			}
		)}
			type="text"
			className='form-control'
			placeholder='Имя'/>
			<input {...register ('middleName',
			{	
			required: true,
			maxLength:50,
			pattern:/^[A-za-z]+$/i
			}
		)}
			type="text"
			className='form-control'
			placeholder='Отчество'/>
			<input {...register ('Email',
			{	
			required: true,
			maxLength:50,
			pattern:/^([A-Za-z]|[0-9])+$/i
			}
		)}
			type="email"
			className='form-control'
			placeholder='Email'/>
		 </div>

			{errors?.lastName?.type ==='requered'&& (
				<p>Обязательно для заполнения</p>
			)}

			{errors?.lastName?.type ==='requered'&& (
				<p>Максимальная длина поля - 50 символов</p>
			)}
			{errors?.lastName?.type ==='pattern'&& (
				<p>Некорректное заполнение</p>
			)}

			{errors?.firstName?.type ==='requered'&& (
				<p>Обязательно для заполнения</p>
			)}

			{errors?.firstName?.type ==='requered'&& (
				<p>Максимальная длина поля - 50 символов</p>
			)}
			{errors?.firstName?.type ==='pattern'&& (
				<p>Некорректное заполнение</p>
			)}

			{errors?.middleName?.type ==='requered'&& (
				<p>Обязательно для заполнения</p>
			)}

			{errors?.middleName?.type ==='requered'&& (
				<p>Максимальная длина поля - 50 символов</p>
			)}
			{errors?.middleName?.type ==='pattern'&& (
				<p>Некорректное заполнение</p>
			)}

			{errors?.email?.type ==='requered'&& (
				<p>Обязательно для заполнения</p>
			)}
			{errors?.email?.type ==='pattern'&& (
				<p>Некорректное заполнение</p>
			)}

      <input className='btn btn-primary' type="submit" />
    </form>
		<MapContainer
		center = {center}
		zoom={10}
		style={{
			width: '100vw',
			height: '500px'	}}
		>
			<TileLayer
			url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=SyKTHxStq7NvayR7XVUu'
			AttributionControl='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
			/>
			<Marker position={center}>
				<Popup>
					Very beatiful place.
				</Popup>
		  </Marker>
			<Polygon positions={centerPolygon} pathOptions={colorOptions}/>
			<CircleMarker
			center={center}
			pathOptions={{color:'black'}}
			radius={10}/>
		</MapContainer>
		</div>
  );
}

export default Form