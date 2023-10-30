import { notes } from './notes'
import { patients } from './patients'
import { rooms } from './rooms'

export const handlers = [...rooms, ...patients, ...notes]
