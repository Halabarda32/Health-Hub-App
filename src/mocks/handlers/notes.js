import { rest } from 'msw'
import { db } from '../db'
import faker from 'faker'
// import { v4 as uuid } from 'uuid'

export const notes = [
	rest.get('/notes', (req, res, ctx) => {
		return res(ctx.status(200), ctx.json({ notes: db.note.getAll() }))
	}),

	rest.post('/notes', (req, res, ctx) => {
		if (req.body.title && req.body.content) {
			console.log('MWS:', req.body)
			const newNote = {
				id: faker.datatype.uuid(),
				title: req.body.title,
				content: req.body.content,
			}

			db.note.create(newNote)

			return res(ctx.status(201), ctx.json({ notes: newNote }))
		}

		return res(ctx.status(404), ctx.json({ error: 'Every note needs to contain title and content.' }))
	}),
	rest.delete('/notes', (req, res, ctx) => {
		if (req.body.id) {
		  const removedNote = db.note.delete({
			where: {
			  id: {
				equals: req.body.id,
			  },
			},
		  });
	
		  return res(
			ctx.status(200),
			ctx.json({
			  removedNote,
			})
		  );
		}
	
		return res(
		  ctx.status(400),
		  ctx.json({
			error: 'Please provide ID of removed note',
		  })
		);
	  }),
]
