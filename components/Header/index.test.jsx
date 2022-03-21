import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from 'components/Header'

describe('Header', () => {
	it('renders links', () => {
		render(<Header />)
		const users = screen.getByText('Users')
		const admin = screen.getByText('Admin')

		expect(users).toBeInTheDocument()
		expect(admin).toBeInTheDocument()
	})
})
