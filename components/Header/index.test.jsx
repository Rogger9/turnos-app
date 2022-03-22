import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from 'components/Header'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Header', () => {

	it('links at home', () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/' }))
		render(<Header />)
		const users = screen.getByText('Users')
		const admin = screen.getByText('Admin')

		expect(users).toBeInTheDocument()
		expect(admin).toBeInTheDocument()
	})

	it('links in /users', () => {
		useRouter.mockImplementationOnce(() => ({ pathname: '/users' }))
		render(<Header />)
		const back = screen.getByText('Back')

		expect(back).toBeInTheDocument()
	})
})
