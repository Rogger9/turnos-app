import Head from 'next/head'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Turnos App</title>
        <meta name='description' content='Turnos app' />
      </Head>

      <h1>Turnos App</h1>
    </div>
  )
}
