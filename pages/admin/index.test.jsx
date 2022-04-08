import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Admin from '.'

jest.mock('components/Header', () => ({
	__esModule: true,
	default: () => <div/>
}))

jest.mock('components/Turns/TurnView', () => ({
	__esModule: true,
	default: () => <div/>
}))

beforeEach(() => render(<Admin />))

describe('Admin', () => {
	it('render', () => {
		const button = screen.getByLabelText('See turns')
		expect(button).toBeInTheDocument()
	})

	// Necessary mock initial value global state
	// it('render list of turns', async () => {
	// 	const day = screen.getByText('1')
	// 	fireEvent.click(day)

	// 	const button = screen.getByLabelText('See turns')
	// 	fireEvent.click(button)

	// 	const listOfTurns = await screen.findByRole('listbox')
	// 	await waitFor(() => expect(listOfTurns).toBeInTheDocument())
	// })

	it('empty data to show', async () => {
		const day = screen.getByText('2')
		fireEvent.click(day)

		const button = screen.getByLabelText('See turns')
		fireEvent.click(button)

		const text = await screen.findByText('No turns to show')
		await waitFor(() => expect(text).toBeInTheDocument())
	})
})
