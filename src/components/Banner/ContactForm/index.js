import { useState, useRef } from 'react'
import './ContactForm.css'

const ContactForm = () => {
	const [name, setName] = useState('')
	const [email, seteEmail] = useState('')
	const [message, setMessage] = useState('')
	const [phone, setPhone] = useState('')
	const [errors, setErrors] = useState([])

	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const messageRef = useRef(null)
	const phoneRef = useRef(null)

	const handleNameInput = ({ target }) => setName(target.value)
	const handleEmailInput = ({ target }) => seteEmail(target.value)
	const handlePhoneInput = ({ target }) => setPhone(target.value)
	const handleMessageInput = ({ target }) => setMessage(target.value)

	const handleSubmit = e => {
		e.preventDefault()

		const inputs = [nameRef, emailRef, messageRef, phoneRef]
		const emptyInputs = []

		inputs.forEach(input => {
			if (!input.current.value) {
				emptyInputs.push(input.current.placeholder)
				input.current.className = 'input-error'
			} else {
				input.current.className = ''
			}
		})
		window.open('mailto:christopherchateau@gmail.com');
		setErrors(emptyInputs)
	}

	return (
		<form
			className='ContactForm'
			onSubmit={handleSubmit}>

			<div className='errors'>
				{errors.map(err => (
					<div className='error'>{err}</div>
				))}
			</div>

			<div className='top'>
				<input
					onChange={handleNameInput}
					ref={nameRef}
					value={name}
					type='text'
					placeholder='Name'
				/>
				<input
					onChange={handleEmailInput}
					ref={emailRef}
					value={email}
					type='email'
					placeholder='Email Address'
				/>
			</div>
			<textarea
				onChange={handleMessageInput}
				ref={messageRef}
				value={message}
				type='text'
				placeholder='Message'
			/>
			<input
				onChange={handlePhoneInput}
				ref={phoneRef}
				value={phone}
				type='tel'
				placeholder='Phone'
			/>
			<div className='button-wrapper'>
				<button>send</button>
			</div>
		</form>
	)
}

export default ContactForm
