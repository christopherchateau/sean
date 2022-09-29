import { useState, useEffect, useRef } from 'react'
import ContactForm from './ContactForm'
import Checkbox from '../../assets/checkbox.png'
import './Banner.css'

const checkboxes = [
	'Criminal Defense',
	'Civil Defense',
	'Wildlife Law',
	'Family Law',
]

const bulletpoints = [
	{
		headline:
			'Continuing Education, Teaching Positions, Selected Speeches & Articles',
		points: [
			'Sexual Assault Defense in the Era of “Me Too” National Trial Lawyers Conference, 2021',
			'Experts, Mitigation and Motions Practice for Sexual Assault Defense Alternate Defense Counsel CLE instructor 2021',
			'LACDL CLE on Sex Assault Defense 2019',
			'Guest Lecturer at University of Denver Sturm College of Law',
			'Moot Court Judge at both CU and DU',
		],
	},
	{
		headline: 'Practice Areas',
		points: [
			'Sexual Assault Defense in the Era of “Me Too” National Trial Lawyers Conference, 2021',
			'Experts, Mitigation and Motions Practice for Sexual Assault Defense Alternate Defense Counsel CLE instructor 2021',
			'LACDL CLE on Sex Assault Defense 2019',
			'Guest Lecturer at University of Denver Sturm College of Law',
			'Moot Court Judge at both CU and DU',
		],
	},
	{
		headline: 'Education',
		points: [
			'Sexual Assault Defense in the Era of “Me Too” National Trial Lawyers Conference, 2021',
			'Experts, Mitigation and Motions Practice for Sexual Assault Defense Alternate Defense Counsel CLE instructor 2021',
			'LACDL CLE on Sex Assault Defense 2019',
		],
	},
	{
		headline: 'Memberships',
		points: [
			'Sexual Assault Defense in the Era of “Me Too” National Trial Lawyers Conference, 2021',
			'Experts, Mitigation and Motions Practice for Sexual Assault Defense Alternate Defense Counsel CLE instructor 2021',
			'LACDL CLE on Sex Assault Defense 2019',
		],
	},
]

const Banner = ({
	name = '',
	text = [],
	addRef = null,
	headline = '',
	textImage = null,
	subHeadline = '',
}) => {
	const [hidden, setHidden] = useState(true)

	const ref = useRef(null)

	const onScroll = () => {
		if (
			ref.current.getBoundingClientRect().top - window.innerHeight < - 200
		) {
			setHidden(false)
			window.removeEventListener('scroll', onScroll)
		}
	}

	useEffect(() => {
		addRef(ref)

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className={`Banner banner-${name}`} ref={ref}>
			<div className={`banner-content ${hidden ? 'hidden' : 'show'}`}>

				{headline && (
					<div className='banner-headline'>
						{name === 'about' && (
							<div className='banner-headline-title'>
								<h2>ABOUT</h2>
							</div>
						)}

						<h1>{headline}</h1>
						<div className='divider' />
						<p>{subHeadline}</p>
					</div>
				)}

				{text && (
					<div>
						{textImage && (
							<img className='text-image' src={textImage} />
						)}
						{text.map(t => (
							<div key={t}>
								<p className='text'>{t}</p>
								<br />
							</div>
						))}
					</div>
				)}

				{name === 'bio' && (
					<div className='bullet-points-wrapper'>
						{bulletpoints.map((bp, i) => {
							const points = bp.points.map(p => (
								<li key={p}>{p}</li>
							))
							return (
								<div className='bullet-points' key={i}>
									<h6>{bp.headline}</h6>
									<ul>{points}</ul>
								</div>
							)
						})}
					</div>
				)}

				{name === 'areas-of-practice' && (
					<div className='checkboxes'>
						{checkboxes.map(cb => (
							<div className='checkbox' key={cb}>
								<img src={Checkbox} />
								<h5>{cb}</h5>
							</div>
						))}
					</div>
				)}

				{name === 'contact' && <ContactForm />}

			</div>
		</div>
	)
}

export default Banner
