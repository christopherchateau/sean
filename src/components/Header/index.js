import Button from '../Button'
import './Header.css'

const Header = ({ executeScroll, refs }) => {
	const labels = ['ABOUT', 'PRACTICE AREAS', 'BIO'] //  'CONTACT']

	return (
		<div className='Header'>
			<div className='buttons'>
				{labels.map((label, i) => (
					<Button
						{...{ label, executeScroll, refs, index: i, key: i }}
					/>
				))}
			</div>
		</div>
	)
}

export default Header
