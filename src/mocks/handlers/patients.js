import { rest } from 'msw'
import { db } from '../db'

export const patients = [
	rest.get('/patients/:id', (req, res, ctx) => {
		if (req.params.id) {
			const matchingPatient = db.patient.findFirst({
				where: {
					id: {
						equals: req.params.id,
					},
				},
			})
			if (!matchingPatient) {
				return res(
					ctx.status(404),
					ctx.json({
						error: 'No matching patient',
					})
				)
			}
			return res(
				ctx.status(200),
				ctx.json({
					patients: matchingPatient,
				})
			)
		}

		return res(
			ctx.status(200),
			ctx.json({
				patients,
			})
		)
	}),

	rest.post('/patients/search', (req, res, ctx) => {
		const matchingPatients = db.patient.findMany({
			where: {
				name: {
					contains: req.body.searchPhrase,
				},
			},
		})
		return res(
			ctx.status(200),
			ctx.json({
				patients: matchingPatients,
			})
		)
	}),
]
