import { setupWorker } from 'msw'
import { handlers } from './handlers'
import { db } from './db'


export const worker = setupWorker(...handlers)

const seed = () => {
	db.room.create({
		id: 'A',
	})
	db.room.create({
		id: 'B',
	})
	db.room.create({
		id: 'C',
	})

	db.doctor.create()

	db.note.create()
	db.note.create()

	for (let i = 0; i < 15; i++) {
		db.patient.create()
		db.operation.create()
	}
}

seed()

window.mocks = {
	seed,
	getPatients: () => db.patient.getAll(),
	getOperations: () => db.operation.getAll(),
	getrooms: () => db.room.getAll(),
	// getOperationRooms: () => db.operationRoom.getAll(),
}
