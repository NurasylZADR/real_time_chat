import React, { FC, useContext } from 'react'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import { Box, Button } from '@mui/material'
import { Context } from '..'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseContextType } from '../types/firebase'
import { async } from '@firebase/util'

const Login: FC = () => {
	const { auth } = useContext(Context) as FirebaseContextType

	const login = async () => {
		const provider = new GoogleAuthProvider()
		const { user } = await signInWithPopup(auth, provider)
		console.log(user)
	}

	return (
		<Container>
			<Grid
				container
				style={{ height: window.innerHeight - 50 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid
					container
					style={{ width: 400, background: 'lightgray' }}
					alignItems={'center'}
					direction={'column'}
				>
					<Box p={5}>
						<Button onClick={login} variant={'outlined'}>
							Войти с помощью Google
						</Button>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Login
