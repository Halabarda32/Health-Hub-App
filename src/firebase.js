// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
export const firebaseConfig = {
	apiKey: '***********',
	authDomain: '***********',
	databaseURL: '***********',
	projectId: '***********',
	storageBucket: '***********',
	messagingSenderId: '***********',
	appId: '***********',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
