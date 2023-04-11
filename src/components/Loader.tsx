import { Box, Button, Container, Grid } from '@mui/material'
import { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '..'
import { FirebaseContextType } from '../types/firebase'
import '../App.css'

const Loader = () => {
	const { auth } = useContext(Context) as FirebaseContextType
	const [user] = useAuthState(auth)

	return (
		<Container>
			<Grid
				container
				style={{ height: window.innerHeight - 50 }}
				alignItems={'center'}
				justifyContent={'center'}
			>
				<Grid container alignItems={'center'} direction={'column'}>
					<div className='lds-dual-ring'></div>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Loader
