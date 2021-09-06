import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from './UserContext'
import axios from 'axios'

export default function SignUp2() {
  const [userdet, setUserdet] = useContext(UserContext)
  const [userpass, setUserpass] = React.useState('')

  const handleSignup = async (e) => {
    // e.preventDefault()
    // console.log('alooo')
    // console.log(userdet)
    const resp = await axios.post('http://localhost:8000/users/signup', {
      User: {
        email: userdet.email,
        password: userpass,
        name: userdet.name,
      },
    })
    console.log('hi ', resp)
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
        type='text'
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
        type='text'
        onChange={(event) => setUserpass(event.target.value)}
      />
      {/* <div> */}
      <Link to='/'>
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
          }}
        >
          SUBMIT
        </button>
      </Link>
      {/* </div> */}
    </div>
  )
}
