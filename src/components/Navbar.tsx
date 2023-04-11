import { AppBar, Toolbar, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { LOGIN_ROUTE } from '../utils/consts'
import { FC, useContext } from 'react'
import { Context } from '..'
import { FirebaseContextType } from '../types/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar: FC = () => {
	const { auth } = useContext(Context) as FirebaseContextType
	const [user] = useAuthState(auth)
	return (
		<AppBar color={'secondary'} position='static'>
			<Toolbar variant='dense'>
				<Grid container justifyContent={'flex-end'}>
					{user ? (
						<Button onClick={() => auth.signOut()} variant={'outlined'}>Выйти</Button>
					) : (
						<NavLink to={LOGIN_ROUTE}>
							<Button variant={'outlined'}>Логин</Button>
						</NavLink>
					)}
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar

