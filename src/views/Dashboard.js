import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PatientsList from '../components/Organisms/PatientList/PatientsList'
import { usePatients } from '../hooks/usePatients'
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styled'
import { Title } from '../components/Atoms/Title/Title'
import Modal from '../components/Organisms/Modal/Modal'
import useModal from '../components/Organisms/Modal/useModal'
import PatientDetails from '../components/Molecules/PatientDetails/PatientDetails'
import { useGetRoomsQuery } from '../store'

const Dashboard = () => {
	const [currentPatient, setCurrentPatient] = useState()
	const { getPatientsById } = usePatients()
	const { id } = useParams()
	const { isOpen, openModalHandler, closeModalHandler } = useModal()
	const { data, isLoading } = useGetRoomsQuery()

	const openPatientDetailsHandler = async id => {
		const patient = await getPatientsById(id)
		setCurrentPatient(patient)
		openModalHandler()
	}

	if (isLoading) {
		return (
			<Wrapper>
				<TitleWrapper>Loading...</TitleWrapper>
			</Wrapper>
		)
	}

	if (!id && data.rooms.length > 0) return <Navigate to={`/dashboard/${data.rooms[0].id}`} />

	return (
		<Wrapper>
			<TitleWrapper>
				<Title as="h2">Room {id}</Title>
				<nav>
					{data.rooms.map(({ id }) => (
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
