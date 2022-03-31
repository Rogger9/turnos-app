import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Users from './'

jest.mock('components/Header', () => ({
	__esModule: true,
	default: () => <div/>
}))

beforeEach(() => render(<Users />))

describe('Users', () => {
	it('renders a heading', () => {
		const expected = screen.getByRole('heading', { level: 3, name: 'Select a day to see the available schedules' })
		expect(expected).toBeInTheDocument()
	})

	it('render button', () => {
		const expected = screen.getByText('See available schedules')
		expect(expected).toBeInTheDocument()
		expect(expected).toBeDisabled()
	})

	it('render select', async () => {
		const daySelected = screen.getByText('1')
		fireEvent.click(daySelected)

		const button = screen.getByText('See available schedules')
		expect(button).not.toBeDisabled()
		fireEvent.click(button)

		const form = await screen.findByPlaceholderText('Insert your name')
		await waitFor(() => expect(form).toBeInTheDocument())
	})
})
