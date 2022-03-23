import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './'

describe('Button', () => {
	it('render', () => {
		render(<Button value='button' />)
		const expected = screen.getByText('button')
		expect(expected).toBeInTheDocument()
	})

	it('click disable', () => {
		const handleClick = jest.fn()
		render(<Button value='button' isDisable handleClick={handleClick} />)
		fireEvent.click(screen.getByText('button'))
		expect(handleClick).toHaveBeenCalledTimes(0)
	})

	it('click', () => {
		const handleClick = jest.fn()
		render(<Button value='button' handleClick={handleClick} />)
		fireEvent.click(screen.getByText('button'))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
