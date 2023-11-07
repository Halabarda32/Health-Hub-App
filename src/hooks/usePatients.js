import { useCallback } from 'react'
import axios from 'axios'

export const usePatients = () => {
	const getRooms = useCallback(async () => {
		try {
			const result = await axios.get('/rooms')
			return result.data.rooms
		} catch (e) {
			console.log(e)
		}
	}, [])

	// const getPatientsById = useCallback(async patientId => {
	// 	try {
	// 		const result = await axios.get(`/patients/${patientId}`)
	// 		return result.data.patients
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }, [])

	const getPatients = useCallback(async roomId => {
		try {
			const result = await axios.get(`/rooms/${roomId}`)
			return result.data.patients
		} catch (e) {
			console.log(e)
		}
	}, [])

	// const findPatient = async searchPhrase => {
	// 	try {
	// 		const { data } = await axios.post(`/patients/search`, {
	// 			searchPhrase,
	// 		})
	// 		return data
	// 	} catch (e) {
	// 		console.log(e)
	// 	}
	// }

	return {
		getRooms,
		getPatients,
		// findPatient,
		// getPatientsById,
	}
}
