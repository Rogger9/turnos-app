import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from 'pages'

jest.mock('components/Header', () => ({
	__esModule: true,
	default: () => <div/>
}))

describe('Home', () => {
	it('renders a heading', () => {
		render(<Home />)
		const expected = screen.getByRole('heading', { level: 1, name: 'Select a view to continue' })
		expect(expected).toBeInTheDocument()
	})
})
