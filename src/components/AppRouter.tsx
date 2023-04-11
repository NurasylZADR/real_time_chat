import { FC, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '..'
import { privateRoutes, publicRoutes } from '../routes'
import { FirebaseContextType } from '../types/firebase'
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts'
import {useAuthState} from 'react-firebase-hooks/auth'

const AppRouter: FC = () => {
    const {auth} = useContext(Context) as FirebaseContextType
	const [user] = useAuthState(auth)

	return user ? (
		<Routes>
			{privateRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({ path, Component }) => (
				<Route path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
		</Routes>
	)
}

export default AppRouter
