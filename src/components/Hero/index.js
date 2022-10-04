import { useState, useEffect } from 'react'
import CloseUpImg from '../../assets/closeup.png'
import './Hero.css'

const Hero = () => {
	const [imgLoaded, setImgLoaded] = useState(false)

	useEffect(() => {
		const img = new Image()

		img.src = CloseUpImg
		img.onload = () => setImgLoaded(true)
	}, [CloseUpImg])

	return <div className={`Hero ${!imgLoaded ? 'loading-overlay': 'b' }`} style={{ backgroundImage: `url(${CloseUpImg})` }}>
			<div className='hero-overlay' />
			<div className='hero-text'>
				<h4>I hate the band Hanson</h4>
				<h2>Sean C Thomson</h2>
				<h3>Their hair sucks most of all it pisses me off</h3>
			</div>
		</div>
}

export default Hero
