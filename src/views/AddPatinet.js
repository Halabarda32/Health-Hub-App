import { React, useContext } from 'react'
import FormField from '../components/Molecules/FormField/FormField'
import { Button } from '../components/Atoms/Button/Button'
import { Title } from '../components/Atoms/Title/Title'
import { ViewWrapper } from '../components/Molecules/ViewWrapper/ViewWrapper'
import { PatientsContext } from '../store/PatientsContext'
import { useForm } from '../hooks/useForm'

const initialFormState = {
	name: '',
	doctor: '',
	room: '',
}

const AddPatient = () => {
	const { addPatientHandler } = useContext(PatientsContext)
	const { formValues, handleInputChange, clearFormHandler } = useForm(initialFormState)

	const submitHandler = e => {
		e.preventDefault()
		addPatientHandler(formValues)
		clearFormHandler(initialFormState)
	}

	return (
		<ViewWrapper as="form" onSubmit={submitHandler}>
			<Title>Add new patient</Title>
			<FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
			<FormField
				label="Atending doctor"
				id="doctor"
				name="doctor"
				value={formValues.doctor}
				onChange={handleInputChange}
			/>
			<FormField label="Room" id="room" name="room" value={formValues.room} onChange={handleInputChange} />
			<Button type="submit">Add</Button>
		</ViewWrapper>
	)
}

export default AddPatient
