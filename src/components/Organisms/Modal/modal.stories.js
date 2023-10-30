import Modal from './Modal'
import PatientDetails from '../../Molecules/PatientDetails/PatientDetails'

export default {
	title: 'Components/Organisms/Modal',
	component: Modal,
}

const Template = args => (
	<Modal {...args}>
		<PatientDetails
			patient={{
				id: '12',
				name: 'Renata Sancz',
				doctor: 'Wojciech Paczor',
				average: '3.3',
				room: 'B',
			}}
		/>
	</Modal>
)

export const Default = Template.bind({})
