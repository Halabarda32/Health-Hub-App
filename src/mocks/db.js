import { factory, primaryKey } from '@mswjs/data'
import faker from 'faker'

faker.seed(123)

const rooms = ['A', 'B', 'C']
const operationRoom = ['D', 'E', 'F']
const doctors = ['Wojciech Paczor', 'Halina Kiepska', 'Marian Załużny', 'Weronika Siemaszko']
const diseases = ['Coronary Artery Disease', 'Arrhythmias', 'Congenital Heart Disease', 'Atherosclerosis']
const operations = ['Cardiomyoplasty', 'Endarterectomy', 'Valve Replacement or Repair']
const getRandomValue = (array, index) => array[index]
const getRandomAverage = () => faker.datatype.number({ min: 1, max: 5, precision: 0.1 })

export const db = factory({
	patient: {
		id: primaryKey(faker.datatype.uuid),
		name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
		doctor: () => getRandomValue(doctors, faker.datatype.number({ min: 0, max: 3 })),
		average: getRandomAverage,
		room: () => getRandomValue(rooms, faker.datatype.number({ min: 0, max: 2 })),
		disease: () => getRandomValue(diseases, faker.datatype.number({ min: 0, max: 3 })),
		medicalExaminations: () => [
			{
				examination: 'Echocardiogram',
				average: getRandomAverage(),
			},
			{
				examination: 'Electrocardiogram',
				average: getRandomAverage(),
			},
			{
				examination: 'CT Scan',
				average: getRandomAverage(),
			},
		],
	},
	room: {
		id: primaryKey(String),
	},
	operation: {
		id: primaryKey(faker.datatype.uuid),
		operationRoom: () => getRandomValue(operationRoom, faker.datatype.number({ min: 0, max: 2 })),
		operation: () => getRandomValue(operations, faker.datatype.number({ min: 0, max: 2 })),
		date: faker.date.soon,
	},
	doctor: {
		id: primaryKey(() => '1'),
		name: () => 'Marian Załużny',
		login: () => 'mzaluzny@healthhub.com',
		password: () => '1234',
	},

	note: {
		id: primaryKey(faker.datatype.uuid),
		title: () => 'Lorem ipsum dolor sit amet',
		content: () => 'Lorem ipsum dolor sit amet',
	}
})
