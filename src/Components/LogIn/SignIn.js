import React from 'react'
import { Link } from 'react-router-dom'
import createContext from 'react'
import { useContext } from 'react'
import UserNamecontext from '../UserNamecontext'
import { useHistory } from 'react-router-dom'
import user from '../UserNamecontext'
import { useState } from 'react'
import axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
// import { History } from "history";
export default function SignIn() {
  const [email, setMail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [user, setUser] = useContext(UserNamecontext)
  const history = useHistory()

  const [open, setOpen] = React.useState(false) //snackbar
  const [popup, setPopup] = React.useState({ message: '', severity: '' })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  async function handlelogin() {
    const response = await axios.post('http://localhost:8000/users/signin', {
      User: {
        email: email,
        password: password,
      },
    })
    console.log(response)
    if (response.data.statusCode === 0) {
      setPopup({ message: response.data.message, severity: 'success' })
      setOpen(true)
      setTimeout(() => {
        let path = '/home'
        // setUser(name)
        history.push(path)
      }, 1000)
      console.log("i'm in")
    } else {
      setPopup({ message: response.data.error, severity: 'error' })
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
        SIGN IN
      </h1>
      <div>
        <label
          style={{
            fontWeight: '600',
            fontFamily: 'sans-serif',
            paddingLeft: '5vw',
          }}
        >
          Phone OR Email{' '}
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
        onChange={
          ((event) => setName(event.target.value),
          (event) => setMail(event.target.value))
        }
      />
      <div>
        <label
          style={{
            fontWeight: '600',
            fontFamily: 'sans-serif',
            paddingLeft: '5vw',
          }}
        >
          Password{' '}
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
        onChange={(event) => setPassword(event.target.value)}
      />
      <div>
        <button
          style={{
            backgroundColor: 'white',
            border: 'none',
            color: '#ED1C24',
            fontWeight: '300',
            fontSize: '1vw',
            paddingLeft: '5vw',
            marginBottom: '2.5vw',
          }}
        >
          Forget Password?
        </button>
      </div>
      <div>
        <Link to='/'>
          <button
            style={{
              border: 'none',
              marginLeft: '5vw',
              width: '20vw',
              height: '2vw',
              backgroundColor: '#ED1C24',
              color: 'white',
              fontWeight: '700',
              fontSize: '1vw',
              fontFamily: 'sans-serif',
            }}
            onClick={handlelogin}
          >
            LOG IN
          </button>
        </Link>
      </div>
      <div>
        <Link to='/SignUp'>
          <button
            style={{
              border: 'none',
              marginLeft: '5vw',
              marginTop: '1.5vw',
              width: '20vw',
              height: '2vw',
              backgroundColor: '#ED1C24',
              color: 'white',
              fontWeight: '700',
              fontSize: '1vw',
              fontFamily: 'sans-serif',
            }}
          >
            SIGN UP
          </button>
        </Link>
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
