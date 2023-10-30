// import PatientsListItem from '../../Molecules/PatientsListItem/PatientsListItem'
// // import { StyledList, StyledTitle, Wrapper } from './PatientsList.styles'
// import FormField from '../../Molecules/FormField/FormField'
// import { Button } from '../../Atoms/Button/Button'

// const Form = () => {
// 	return (
// 		<>
// 			<Wrapper as="form" onSubmit={addPatientHandler}>
// 				<StyledTitle>Add new patient</StyledTitle>
// 				<FormField label="name" id="name" name="name" value={formValue.name} onChange={handleInputChange} />
// 				<FormField
// 					label="attendance"
// 					id="attendance"
// 					name="attendance"
// 					value={formValue.attendance}
// 					onChange={handleInputChange}
// 				/>
// 				<FormField label="average" id="average" name="average" value={formValue.average} onChange={handleInputChange} />
// 				<Button type="submit">Save</Button>
// 			</Wrapper>
// 			<Wrapper>
// 				<StyledTitle>Patients list</StyledTitle>
// 				<StyledList>
// 					{isPatients.map(patientsData => (
// 						<PatientsListItem key={patientsData.name} deletePatient={deletePatient} patientsData={patientsData} />
// 					))}
// 				</StyledList>
// 			</Wrapper>
// 		</>
// 	)
// }

// export default Form
