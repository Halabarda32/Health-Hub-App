import { configureStore } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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

const roomsApi = createApi({
	reducerPath: 'roomsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: '/',
	}),
	endpoints: builder => ({
		getRooms: builder.query({
			query: () => 'rooms',
		}),
	}),
})

export const { useGetRoomsQuery } = roomsApi

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
		[notesApi.reducerPath]: notesApi.reducer,
		[roomsApi.reducerPath]: roomsApi.reducer,
		[patientsApi.reducerPath]: patientsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(notesApi.middleware, roomsApi.middleware, patientsApi.middleware),
})
