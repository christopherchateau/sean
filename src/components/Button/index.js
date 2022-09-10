import './Button.css'

function Button({ label }) {
	console.log('btn', label)
	return <div className='Button'>{label}</div>
}

export default Button
