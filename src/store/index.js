import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export const fetchRooms = createAsyncThunk('rooms/fetchRooms', async () => {
	const querySnapshot = await getDocs(collection(db, 'rooms'))
	const rooms = []
	querySnapshot.forEach(doc => {
		rooms.push({ id: doc.id, ...doc.data() })
	})

	return rooms
})

const roomsSlice = createSlice({
	name: 'rooms',
	initialState: [],
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchRooms.fulfilled, (state, action) => {
			return action.payload
		})
	},
})

export const roomsReducer = roomsSlice.reducer

const notesApi = createApi({
	reducerPath: 'notesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	tagTypes: ['Notes'],
	endpoints: builder => ({
		getNotes: builder.query({
			query: () => 'notes',
			providesTags: ['Notes'],
		}),
		addNote: builder.mutation({
			query: body => ({
				url: 'notes',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['Notes'],
		}),
		removeNote: builder.mutation({
			query: body => ({
				url: 'notes',
				method: 'DELETE',
				body,
			}),
			invalidatesTags: ['Notes'],
		}),
	}),
})

export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi

const patientsApi = createApi({
	reducerPath: 'patientsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://react-auth-5b5a0-default-rtdb.europe-west1.firebasedatabase.app',
	}),
	endpoints: builder => ({
		getPatients: builder.query({
			query: () => 'patients.json',
		}),
		getPatient: builder.query({
			query: ({ patientId, roomId }) => `patients/${patientId}/${roomId}.json`,
		}),
	}),
})

export const { useGetPatientsQuery, useGetPatientQuery } = patientsApi

export const store = configureStore({
	reducer: {
		rooms: roomsReducer,
		[notesApi.reducerPath]: notesApi.reducer,
		[patientsApi.reducerPath]: patientsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(notesApi.middleware, patientsApi.middleware),
})
