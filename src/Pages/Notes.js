import React from 'react'
import NavBar from '../Components/HomePage/NavBar'
import NoteSection from '../Components/Notes/Notes'
import { BottomNavigation } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    height: '6vw',
    backgroundColor: 'gray',
    bottom: '0px',
    left: '0px',
    right: '0px',
    marginBottom: '0px',
  },
}))
export default function Notes() {
  const classes = useStyles()
  const history = useHistory()
  React.useEffect(() => {
    console.log(window.localStorage, 'dsfsdfsf')
    if (window.localStorage.getItem('auth') == null) {
      console.log('its null')
      history.push('/')
    }
  }, [])
  return (
    <div>
      <NavBar />
      <NoteSection style={{ marginBottom: '10vh' }} />
      {/* <BottomNavigation className={classes.footer}>
        <h2 style={{ color: 'white' }}>Copyrights to MA^2 team</h2>
      </BottomNavigation> */}
    </div>
  )
}
