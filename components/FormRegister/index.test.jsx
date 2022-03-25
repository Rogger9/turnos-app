import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormRegister from '.'

beforeEach(() => render(<FormRegister day={1} />))

describe('FormRegister', () => {
	it('render', () => {
		const input = screen.getByPlaceholderText('Insert your name')
		expect(input).toBeInTheDocument()
	})

	it('input-name', async () => {
		const name = screen.getByLabelText('name')
		fireEvent.change(name, { target: { value: 'test' } })
		await waitFor(() => expect(name.value).toBe('test'))
	})

	it('validation input-name empty', async () => {
		const name = screen.getByLabelText('name')
		act(() => {fireEvent.blur(name)})
		const msg = await screen.findByText('Please enter a valid name')
		await waitFor(() => expect(msg).toBeInTheDocument())
	})

	it('validation input-email empty', async () => {
		const email = screen.getByLabelText('email')
		act(() => {fireEvent.blur(email)})
		const msg = await screen.findByText('Please enter a valid email')
		await waitFor(() => expect(msg).toBeInTheDocument())
	})

	it('validation input-name error', async () => {
		const name = screen.getByLabelText('name')
		await waitFor(() => fireEvent.change(name, { target: { value: 'test1' } }))
		await waitFor(() => fireEvent.blur(name))
		const msg = await screen.findByText('Please enter a valid name')
		await waitFor(() => expect(msg).toBeInTheDocument())
	})

	it('validation input-email error', async () => {
		const email = screen.getByLabelText('email')
		await waitFor(() => fireEvent.change(email, { target: { value: 'correo' } }))
		await waitFor(() => fireEvent.blur(email))
		const msg = await screen.findByText('Please enter a valid email')
		await waitFor(() => expect(msg).toBeInTheDocument())
	})
})
