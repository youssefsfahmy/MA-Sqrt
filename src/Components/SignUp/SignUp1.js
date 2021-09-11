import React, { useContext } from 'react'
import UserInfo from './UserContext'
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function SignUp1(props) {
  const [email, setEmail] = React.useState('')
  const [name, setName] = React.useState('')
  const [userdet, setUserdet] = useContext(UserInfo)

  const [open, setOpen] = React.useState(false) //snackbar
  const [popup, setPopup] = React.useState({ message: '', severity: '' })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  async function validatemail() {
    setUserdet({
      email: email,
      name: name,
    })
    console.log(userdet.name + ' lol ' + userdet.email)
    const res = await axios.post('http://localhost:8000/users/signup1', {
      User: {
        email: email,
        name: name,
      },
    })
    console.log('abdul', res)
    if (res.data.statusCode === 0) {
      props.setButton(1)
      console.log('button')
    } else {
      setPopup({ message: res.data.error, severity: 'error' })
      setOpen(true)
    }
  }

  return (
    <div
      style={{
        justifyContent: 'center',
        width: '30vw',
        height: '40vw',
        marginLeft: '40vw',
        paddingTop: '10vw',
        backgroundColor: 'white',
      }}
    >
      <h1
        style={{
          marginLeft: '10vw',
          fontFamily: 'sans-serif',
          fontWeight: '800',
        }}
      >
        SIGN UP
      </h1>
      <div>
        <label
          style={{
            fontWeight: '600',
            fontFamily: 'sans-serif',
            paddingLeft: '5vw',
          }}
        >
          E-mail{' '}
        </label>
      </div>
      <input
        style={{
          marginLeft: '5vw',
          marginBottom: '2vw',
          height: '2vw',
          width: '20vw',
        }}
        type='text'
        onChange={(event) => {
          console.log('email', event.target.value)
          setEmail(event.target.value)
        }}
      />

      <div>
        <label
          style={{
            fontWeight: '600',
            fontFamily: 'sans-serif',
            paddingLeft: '5vw',
          }}
        >
          Username{' '}
        </label>
      </div>
      <input
        style={{
          marginLeft: '5vw',
          marginBottom: '2vw',
          height: '2vw',
          width: '20vw',
          cursor: 'pointer',
        }}
        type='text'
        onChange={(event) => {
          console.log('name', event.target.value)
          setName(event.target.value)
        }}
      />

      <div>
        <button
          onClick={validatemail}
          style={{
            border: 'none',
            marginLeft: '5vw',
            width: '20vw',
            height: '2vw',
            backgroundColor: '#67E0FD',
            color: 'white',
            fontWeight: '700',
            fontSize: '1vw',
            fontFamily: 'sans-serif',
            cursor: 'pointer',
          }}
        >
          NEXT
        </button>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
