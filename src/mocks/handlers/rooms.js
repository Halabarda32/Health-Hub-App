import { rest } from 'msw'
import { db } from '../db'

export const rooms = [
	rest.get('/rooms', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ rooms: db.room.getAll() }))
	}),

	rest.get('/rooms/:id', (req, res, ctx) => {
		if (req.params.id) {
			const matchingPatients = db.patient.findMany({
				where: {
					room: {
						equals: req.params.id,
					},
				},
			})
			return res(ctx.status(200), ctx.json({ patients: matchingPatients }))
		}

		return res(ctx.status(404), ctx.json({ error: 'Please provide the room ID.' }))
	}),
]
