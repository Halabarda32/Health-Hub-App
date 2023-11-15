import React from 'react'
import FormField from '../components/Molecules/FormField/FormField'
import { Button } from '../components/Atoms/Button/Button'
import { Title } from '../components/Atoms/Title/Title'
import { ViewWrapper } from '../components/Molecules/ViewWrapper/ViewWrapper'
import { useForm } from '../hooks/useForm'
import { useError } from '../hooks/useErrors'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const initialFormState = {
	name: '',
	doctor: '',
	disease: '',
	average: '',
	medicalExaminations: '',
	room: '',
}

const AddPatient = () => {
	const { formValues, handleInputChange, clearFormHandler } = useForm(initialFormState)
	const { dispatchError } = useError()

	const addPatient = async patientData => {
		patientData.medicalExaminations = [
			{
				examination: 'Echocardiogram',
				average: 0.0,
			},
			{
				examination: 'Electrocardiogram',
				average: 0.0,
			},
			{
				examination: 'CT Scan',
				average: 0.0,
			},
		]

		try {
			const docRef = await addDoc(collection(db, 'patients'), patientData)
			console.log('Document written with ID: ', docRef.id)
		} catch (error) {
			console.error('Error adding document: ', error)
		}
	}

	const submitHandler = async e => {
		e.preventDefault()
		for (const key in formValues) {
			if (formValues.hasOwnProperty(key) && key !== 'medicalExaminations' && formValues[key] === '') {
				dispatchError('All fields are required!')
				return
			}
		}

		// Log formValues before submission
		console.log('Form Values:', formValues)

		addPatient(formValues)
		clearFormHandler(initialFormState)
	}

	console.log(formValues)

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
			<FormField label="Disease" id="disease" name="disease" value={formValues.disease} onChange={handleInputChange} />
			<FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
			<FormField label="Room" id="room" name="room" value={formValues.room} onChange={handleInputChange} />
			<Button type="submit">Add</Button>
		</ViewWrapper>
	)
}

export default AddPatient
