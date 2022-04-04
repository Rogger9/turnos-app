import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Custom404 from '.'

jest.mock('components/Header', () => ({
	__esModule: true,
	default: () => <div/>
}))

describe('Page404', () => {
	it('render', () => {
		render(<Custom404 />)

		const text = screen.getByText('Sorry! This page does not exist.')
		expect(text).toBeInTheDocument()
	})
})
