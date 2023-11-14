import { factory, primaryKey } from '@mswjs/data'
import faker from 'faker'

export const db = factory({
	note: {
		id: primaryKey(faker.datatype.uuid),
		title: () => 'Lorem ipsum dolor sit amet',
		content: () => 'Lorem ipsum dolor sit amet',
	}
})
