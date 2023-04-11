import { FirebaseApp } from 'firebase/app'
import { Auth } from 'firebase/auth'
import { Firestore } from 'firebase/firestore/lite'

export type FirebaseContextType = {
	app: FirebaseApp
	auth: Auth
	firestore: Firestore
}
