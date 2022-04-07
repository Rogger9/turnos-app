import PageLayout from 'components/PageLayout'
import styles from 'styles/Home.module.css'

export default function Home ({ data }) {
	console.log(data)
	return (
		<PageLayout style={styles.container}>
			<h1>Select a view to continue</h1>
		</PageLayout>
	)
}

export async function getStaticProps () {
	const res = await fetch('http://localhost:3000/api/turns')
	const data = await res.json()

	return {
		props: { data }
	}
}
