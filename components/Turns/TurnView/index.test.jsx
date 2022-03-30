import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import TurnView from '.'

const data = {
	name: 'John',
	contact: 'correo@correo.com',
	hour: 8
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

	it('render route /admin', () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/admin' }))
		render(<TurnView {...data} />)

		const name = screen.getByText(data.name)
		const contact = screen.getByText(data.contact)
		const button = screen.getByText('Delete')

		expect(name).toBeInTheDocument()
		expect(contact).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})
})