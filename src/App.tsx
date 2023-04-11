import { FC, useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.'
import './App.css'
import AppRouter from './components/AppRouter'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import { FirebaseContextType } from './types/firebase'

const App: FC = () => {
	const { auth } = useContext(Context) as FirebaseContextType
	const [user, loading, error] = useAuthState(auth)

	if (loading) {
		return <Loader />
	}
	return (
		<BrowserRouter>
			<Navbar />
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
