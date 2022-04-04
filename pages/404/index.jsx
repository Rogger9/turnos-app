import PageLayout from 'components/PageLayout'
import { container } from './style.module.css'

export default function Custom404 () {
	return (
		<PageLayout title='Error404' style={container}>
			<h1>Sorry! This page does not exist.</h1>
		</PageLayout>
	)
}
