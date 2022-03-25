import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import FormRegister from '.'

describe('FormRegister', () => {
	it('render', () => {
		render(<FormRegister />)
		const input = screen.getByPlaceholderText('Insert your name')
		expect(input).toBeInTheDocument()
	})
})
