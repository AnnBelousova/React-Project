import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
	return (
		<div>
		<div>Description</div>
		<div id='div'>


		<motion.div id='div1'
			initial={{
				x:-1000,
				opacity:0
			}}

			animate={{
				x:0,
				opasity:1
			}}
			transition={{
				delay:1,
				duration:2
			}}>
		
		</motion.div>
		Interesting fact about Italy

		<motion.div id='div2'
		initial={{
			opasity:0,
		}}
		animate={{
			y:0, 
			opasity:1
		}}
		transition={{
			delay:1,
			duration:2
		}}>


		<motion.img
			src='/img/Zapovednik-Pyan-di-Spanya-1.jpg'
			className='img'
			width={850}
			initial={{
				opasity:0.6
			}}
			transition={{
				duration:5
			}}

			whileTap={{rotate: 360}}/>
			</motion.div>

			<motion.div id='divImg'>
			<motion.div id='div3'
		initial={{
			opasity:0,
			scale:0.5
		}}
		animate={{
			scale:1,
			opasity:1
		}}
		transition={{
			duration:2
		}}>


		<motion.img
			src='/img/ozero_komo_97.jpg'
			className='img2'
			width={200}
			initial={{
				opasity:0.6
			}}
			transition={{
				duration:5
			}}

			whileHover={{
				scale:1.5,
				transition:{
					duration:2
				}
				}}
				/>
			</motion.div>
			</motion.div>

			<motion.div id='div4'
		initial={{
			opasity:0,
			scale:0.5
		}}
		animate={{
			scale:1,
			opasity:1
		}}
		transition={{
			duration:2
		}}>

		<motion.img drag='x'
			src='/img/ozero_komo_97.jpg'
			className='img2'
			width={200}
			initial={{
				opasity:0.6
			}}
			transition={{
				duration:5
			}}

			whileDrag={{
				scale:1.5,
				}}
				/>
			</motion.div>

			<motion.button className='btn btn-primary'
				whileHover={{
					scale:1.2
				}}>
					Нажми
				</motion.button>

		{/* <motion.img
		src='/img/Zapovednik-Pyan-di-Spanya-1.jpg'
		alt = ''
		width={'20%'}
		animate={{rotate:360}}
		transition={{
			delay:2,
			duration:5,
			repeat:Infinity,
			repeatDelay:0.5,
			repeatType:'reverse',
			type:'inertia'
		}}
		/>

		<motion.p

		initial={{
			x:-1000,
			opasity:0
		}}

		animate={{
			x:500,
			opacity:1
		}}

		transition={{
			delay:2,
			duration:2,
			type:'tween'
		}}
		>
			Text
		</motion.p> */}
		</div>
		</div>
	)
}

export default Description