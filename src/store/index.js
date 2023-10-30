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
	baseQuery: fetchBaseQuery({ baseUrl: '/' }),
	tagTypes: ['Patients'],
	endpoints: (builder) => ({
	  getRoom: builder.query({
		query: () => 'room',
		providesTags: ['Room'],
	  }),
	  getPatientsById: builder.query({
		query: (patientId) => `patients/${patientId}`,
		providesTags: ['Patients'],
	  }),
	  getPatientsByRoom: builder.query({
		query: (roomId) => `rooms/${roomId}`,
		providesTags: ['Patients'],
	  }),
	  findPatient: builder.query({
		query: (searchPhrase) => `patients/search?searchPhrase=${searchPhrase}`,
		providesTags: ['Patients'],
	  }),
	}),
  });
  
  export const {
	useGetRoomQuery,
	useGetPatientsByIdQuery,
	useGetPatientsByRoomQuery,
	useFindPatientQuery,
  } = patientsApi;
  
export const store = configureStore({
	reducer: {
		[notesApi.reducerPath]: notesApi.reducer,
		[roomsApi.reducerPath]: roomsApi.reducer,
		[patientsApi.reducerPath]: patientsApi.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(notesApi.middleware, roomsApi.middleware, patientsApi.middleware),
})
