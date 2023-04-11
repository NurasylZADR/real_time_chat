import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from 'firebase/app'
import { FacebookAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { createContext } from 'react'
import { FirebaseApp } from 'firebase/app'
import { FirebaseContextType } from './types/firebase'

const app = initializeApp({
	apiKey: 'AIzaSyDhMxbIqMKIm1HzBXxp7hG32JAiA4xMkjM',
	authDomain: 'chat-react-d1e38.firebaseapp.com',
	projectId: 'chat-react-d1e38',
	storageBucket: 'chat-react-d1e38.appspot.com',
	messagingSenderId: '97778460358',
	appId: '1:97778460358:web:e1db3bc9419263e6b2d9c7',
	measurementId: 'G-NVP9L3E4VS',
})

export const Context = createContext<FirebaseContextType | null>(null)

const firestore = getFirestore(app)
console.log(firestore)
const auth = getAuth(app)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Context.Provider
		value={{
			app,
			auth,
			firestore,
		}}
	>
		<App />
	</Context.Provider>
)
