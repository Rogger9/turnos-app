import { useState } from 'react'
import Button from 'components/Button'
import { getScheduleList } from './getSchedulesList'
import ListSchedules from './ListSchedules'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validation } from './validations'
import styles from './style.module.css'

export default function FormRegister ({ day }) {
	const [hour, setHour] = useState(null)
	const { hoursToShow } = getScheduleList(day)
	const handleClick = e => setHour(e.target.value)

	return (
		<Formik
			initialValues={{ name: '', email: '' }}
			validate={validation}
			onSubmit={({ name, email }) => console.log(name, email)}
		>
			{
				({ errors: { name, email } }) => (
					<Form className={styles.form}>
						<ListSchedules {...{ hoursToShow, styles, handleClick }} />
						<Field type='text'
							name='name'
							id='name'
							className={styles.input}
							placeholder='Insert your name'
							aria-label='name'
						/>
						<ErrorMessage name='name' component={() => <span role='alert' className={styles.error}>{name}</span>} />
						<Field type='email'
							name='email'
							id='email'
							className={styles.input}
							placeholder='correo@correo.com'
							aria-label='email'
						/>
						<ErrorMessage name='email' component={() => <span className={styles.error}>{email}</span>} />
						<Button type='submit' value='Done' isDisable={!hour} label='Done'/>
					</Form>
				)
			}
		</Formik>
	)
}