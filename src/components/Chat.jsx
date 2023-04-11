import { Button, Container, Grid, TextField, Avatar } from '@mui/material'
import {
	collection,
	orderBy,
	query,
	addDoc,
	serverTimestamp,
} from 'firebase/firestore'
import { useContext, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Context } from '..'
import Loader from './Loader'

const Chat = () => {
	const { auth, firestore } = useContext(Context)
	const [user] = useAuthState(auth) //кортеж
	const [messages, loading] = useCollectionData(
		query(collection(firestore, 'messages'), orderBy('createdAt'))
	)

	const [value, setValue] = useState('')

	const sendMessage = e => {
		addDoc(collection(firestore, 'messages'), {
			uid: user.uid,
			displayName: user.displayName,
			photoUrl: user.photoURL,
			text: value,
			createdAt: serverTimestamp(),
		})
		setValue('')
	}

	if (loading) {
		return <Loader />
	}

	return (
		<Container>
			<Grid
				container
				style={{ height: window.innerHeight - 50, marginTop: 20 }}
				justifyContent={'center'}
			>
				<div
					style={{
						width: '80%',
						height: '70vh',
						border: '1px solid gray',
						overflowY: 'auto',
					}}
				>
					{messages.map(message => (
						<div
							style={{
								margin: 10,
								border:
									message.uid === user.uid
										? '2px solid green'
										: '2px dashed red',
								marginLeft: message.uid === user.uid ? 'auto' : '10px',
								width: 'fit-content',
								padding: 5
							}}
						>
							<Grid container>
								<Avatar>{message.photoURL}</Avatar>
								<div>{message.displayName}</div>
							</Grid>
							<div>{message.text}</div>
						</div>
					))}
				</div>

				<Grid
					container
					direction={'column'}
					alignItems={'flex-end'}
					style={{ width: '80%' }}
				>
					<TextField
						value={value}
						onChange={e => setValue(e.target.value)}
						fullWidth
						maxRows={2}
						variant='outlined'
					></TextField>
					<Button onClick={sendMessage} variant={'outlined'}>
						Отправить сообщение
					</Button>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Chat
