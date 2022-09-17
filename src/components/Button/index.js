import './Button.css'

const Button = ({ label, executeScroll, refs, index }) => (
	<div className='Button' onClick={() => executeScroll(refs[index])}>
		{label}
	</div>
)

export default Button
