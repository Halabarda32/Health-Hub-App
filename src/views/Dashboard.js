import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PatientsList from '../components/Organisms/PatientList/PatientsList'
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styled'
import { Title } from '../components/Atoms/Title/Title'
import Modal from '../components/Organisms/Modal/Modal'
import useModal from '../components/Organisms/Modal/useModal'
import PatientDetails from '../components/Molecules/PatientDetails/PatientDetails'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { fetchRooms } from '../store'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = () => {
	const [currentPatient, setCurrentPatient] = useState(null)
	const { id } = useParams()
	const { isOpen, openModalHandler, closeModalHandler } = useModal()
	const dispatch = useDispatch()
	const rooms = useSelector(state => state.rooms)

	useEffect(() => {
		dispatch(fetchRooms())
	}, [dispatch])

	const openPatientDetailsHandler = async patientID => {
		try {
			const patientRef = doc(db, 'patients', patientID)
			const patientDoc = await getDoc(patientRef)

			if (patientDoc.exists()) {
				const patient = patientDoc.data()
				setCurrentPatient(patient)
				openModalHandler()
			} else {
				console.error('No such patient!')
			}
		} catch (error) {
			console.error('Error fetching patient data:', error)
		}
	}

	if (!id && rooms.length > 0) {
		return <Navigate to={`/dashboard/${rooms[0].id}`} />
	}

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as="h2">Room {id}</Title>
				<nav>
					{rooms.map(({ id }) => (
						<Link key={id} to={`/dashboard/${id}`}>
							{id}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<PatientsList openPatientDetailsHandler={openPatientDetailsHandler} />
				<Modal isOpen={isOpen} closeHandler={closeModalHandler}>
					<PatientDetails patient={currentPatient} />
				</Modal>
			</GroupWrapper>
		</Wrapper>
	)
}

export default Dashboard
