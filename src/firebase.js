// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
export const firebaseConfig = {
	apiKey: 'AIzaSyBjZ5BH8412krd1Fp3K0gKFhfhyJAvVAZw',
	authDomain: 'react-auth-5b5a0.firebaseapp.com',
	databaseURL: 'https://react-auth-5b5a0-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'react-auth-5b5a0',
	storageBucket: 'react-auth-5b5a0.appspot.com',
	messagingSenderId: '246256466123',
	appId: '1:246256466123:web:16b84811f241a1de2d834e',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
