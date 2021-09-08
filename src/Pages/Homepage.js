import React, { useEffect } from 'react'
import NavBar from '../Components/HomePage/NavBar'
import homebgd from '../Homepagebgd.png'
// import { height } from "@material-ui/system";
import { useContext } from 'react'
import UserNamecontext from '../Components/UserNamecontext'
import NoteCard from '../Components/Notes/NoteCard'
import axios from 'axios'
import { BottomNavigation } from '@material-ui/core'
import { useHistory } from 'react-router'

export default function Homepage() {
  const [user, setUser] = React.useState('')
  const history = useHistory()
  useEffect(() => {
    console.log(window.localStorage, 'dsfsdfsf')
    if (window.localStorage.getItem('auth') == null) {
      console.log('its null')
      history.push('/')
      console.log(window.localStorage.getItem('auth'))
    }
  }, [])
  useEffect(() => {
    // console.log('hola', id)
    axios
      .post(
        'http://localhost:8000/users/userdetails',
        {},
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        console.log(res.data.user.name)
        setUser(res.data.user.name)
        // if (res.data.data) setArr(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <NavBar />
      <div
        style={{
          // backgroundImage: `url(${homebgd})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "contain",
          width: '100vw',
          height: '20vw',
        }}
      >
        <img
          src={homebgd}
          style={{ width: '100%', height: '40vw' }}
          alt={'welcome'}
        />
        <h1
          style={{
            position: 'absolute',
            bottom: '230px',
            left: '75px',
            fontSize: '5vw',
            color: 'white',
          }}
        >
          Welcome Back,{user}
        </h1>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ textAlign: '-webkit-center' }}>
          <h1 style={{ marginTop: '10vh' }}>Latest Notes</h1>
          {/* id:"",
        title:"",
        content:"",
        date:"",
        curDate:"" */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <NoteCard
              elem={{
                id: '0',
                title: 'Note1',
                content: 'Content1',
                date: '',
                curDate: '',
              }}
            ></NoteCard>
            <NoteCard
              elem={{
                id: '1',
                title: 'Note2',
                content: 'Content2',
                date: '',
                curDate: '',
              }}
            ></NoteCard>
            <NoteCard
              elem={{
                id: '2',
                title: 'Note3',
                content: 'Content3',
                date: '',
                curDate: '',
              }}
            ></NoteCard>
          </div>
        </div>
        <div style={{ textAlign: '-webkit-center' }}>
          {' '}
          {/*latest todos*/}
          <h1 style={{ marginTop: '10vh' }}>Latest Todos</h1>
        </div>
      </div>
      <BottomNavigation style={{ backgroundColor: 'black', height: '6vw' }}>
        <h1 style={{ color: 'white' }}>Copyrights to MA^2 team</h1>
      </BottomNavigation>
    </div>
  )
}
