import Button from '../Button'
import './Header.css'

const Header = () => {
	const labels = ['ABOUT', 'PRACTICE AREAS', 'BIO', 'CONTACT']

	return (
		<div className='Header'>
			<div className='buttons'>
				{labels.map(label => (
					<Button {...{ label, key: label }} />
				))}
			</div>
		</div>
	)
}

export default Header
