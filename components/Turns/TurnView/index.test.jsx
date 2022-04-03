import { getByText, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TurnView from '.'

const data = {
	name: 'John',
	contact: 'correo@correo.com',
	schedule: 8
}

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('TurnView', () => {
	it('render route /users', () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/users' }))
		render(<TurnView {...data} />)

		const name = screen.getByText(data.name)
		const contact = screen.getByText(data.contact)

		expect(name).toBeInTheDocument()
		expect(contact).toBeInTheDocument()
	})

	it('render route /admin', async () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/admin' }))
		render(<TurnView {...data} />)

		const name = screen.getByText(data.name)
		const contact = screen.getByText(data.contact)
		const button = await screen.findByText('Delete')

		expect(name).toBeInTheDocument()
		expect(contact).toBeInTheDocument()
		await waitFor(() => expect(button).toBeInTheDocument())
	})

	it('hour of turn is past', async () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/admin' }))
		data.schedule = new Date().getHours() - 1
		render(<TurnView {...data} />)

		const button = await screen.findByText('Delete')
		await waitFor(() => expect(button).toBeDisabled())
	})
})
