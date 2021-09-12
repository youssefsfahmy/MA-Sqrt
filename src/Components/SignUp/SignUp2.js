import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './UserContext'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import MuiAlert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar'

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export default function SignUp2() {
  const history = useHistory()
  const [userdet, setUserdet] = useContext(UserContext)
  const [userpass, setUserpass] = React.useState('')
  const [open, setOpen] = React.useState(false) //snackbar
  const [popup, setPopup] = React.useState({ message: '', severity: '' })
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSignup = async (e) => {
    // e.preventDefault()
    // console.log('alooo')
    // console.log(userdet)
    const res = await axios.post('http://localhost:8000/users/signup', {
      User: {
        email: userdet.email,
        password: userpass,
        name: userdet.name,
      },
    })
    if (res.data.statusCode === 0) {
      setPopup({
        message: res.data.message + ', you will be redirected to login page',
        severity: 'success',
      })
      setOpen(true)
      setTimeout(() => {
        let path = '/'
        history.push(path)
      }, 2000)
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
          Password{' '}
        </label>
      </div>
      <input
        style={{
          marginLeft: '5vw',
          height: '2vw',
          width: '20vw',
        }}
        type='password'
      />
      <div
        style={{
          display: 'flex',
          marginLeft: '3.5vw',
        }}
      >
        <div>
          <ul>
            <li
              style={{
                color: 'green',
              }}
            >
              {' '}
              Lower-case{' '}
            </li>
            <li
              style={{
                color: 'green',
              }}
            >
              {' '}
              Upper-case{' '}
            </li>
          </ul>
        </div>
        <ul>
          <li
            style={{
              color: 'green',
            }}
          >
            {' '}
            8-Characters{' '}
          </li>
          <li
            style={{
              color: 'green',
            }}
          >
            {' '}
            Numbers{' '}
          </li>
        </ul>
        <div></div>
      </div>

      <div>
        <label
          style={{
            fontWeight: '600',
            fontFamily: 'sans-serif',
            paddingLeft: '5vw',
          }}
        >
          Confirm Password{' '}
        </label>
      </div>
      <input
        style={{
          marginLeft: '5vw',
          marginBottom: '2vw',
          height: '2vw',
          width: '20vw',
        }}
        type='password'
        onChange={(event) => setUserpass(event.target.value)}
      />
      {/* <div> */}

      <button
        onClick={handleSignup}
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
        SUBMIT
      </button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
    </div>
  )
}
