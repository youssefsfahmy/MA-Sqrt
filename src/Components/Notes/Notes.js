import { React, useContext, useState, useEffect } from 'react'
import NoteCard from './NoteCard'
import NoteInput from '../../Components/Notes/NoteInput'
import { makeStyles } from '@material-ui/core/styles'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
// import UserIdcontext from '../LogIn/UserIdcontext'
import axios from 'axios'
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: "center",
    minHeight: '100vh',
    backgroundColor: 'mintcream',
  },
  notes: {
    // display: "flex",
    // flexWrap: "wrap",
    marginTop: '3vw',
    // placeContent:"center",
    // alignItems:"center"
  },
  noteSection: {
    display: 'flex',
    flexWrap: 'wrap',
    placeContent: 'center',
  },
}))
export default function Notes() {
  const classes = useStyles()
  const [arr, setArr] = useState([])
  const [button, setButton] = useState(false)
  // const [id, setId] = useContext(UserIdcontext)
  const [idnote, setIdNote] = useState(0)
  const [open, setOpen] = useState(false)
  const [change, setChange] = useState(false)
  const [popup, setPopup] = useState({ message: '', severity: '' })
  useEffect(() => {
    // console.log('hola', id)
    axios
      .post(
        'http://localhost:8000/users/getmynotes',
        {},
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        console.log(res.data.data)
        if (res.data.data) setArr(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [change])
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <h1>My Notes</h1>
      <NoteInput
        arr={arr}
        setArr={setArr}
        setButton={setButton}
        button={button}
        id={idnote}
        setId={setIdNote}
        setOpen={setOpen}
        setPopup={setPopup}
        setChange={setChange}
        change={change}
      />
      <div className={classes.notes}>
        {arr.filter((e) => e.isPinned).length === 0 ? (
          <div className={classes.noteSection}>
            {arr
              .sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited))
              .map((elem, index) => (
                <NoteCard
                  noteId={elem.id}
                  elem={elem}
                  setOpen={setOpen}
                  setPopup={setPopup}
                  setChange={setChange}
                  change={change}
                />
              ))}
          </div>
        ) : (
          <>
            <h2 className={classes.noteSection}>Pinned</h2>
            <div className={classes.noteSection}>
              {arr
                .sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited))
                .map((elem, index) =>
                  elem.isPinned ? (
                    <NoteCard
                      noteId={elem.id}
                      elem={elem}
                      setOpen={setOpen}
                      setPopup={setPopup}
                      setChange={setChange}
                      change={change}
                    />
                  ) : (
                    <></>
                  )
                )}
            </div>
            {arr.filter((e) => !e.isPinned).length === 0 ? (
              <></>
            ) : (
              <h2 className={classes.noteSection}>Others</h2>
            )}
            <div className={classes.noteSection}>
              {arr
                .sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited))
                .map((elem, index) =>
                  !elem.isPinned ? (
                    <NoteCard
                      noteId={elem.id}
                      elem={elem}
                      setPopup={setPopup}
                      setOpen={setOpen}
                      setChange={setChange}
                      change={change}
                    />
                  ) : (
                    <></>
                  )
                )}
            </div>
          </>
        )}
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>

      {/* <Snackbar open={open4} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Note updated successfully
        </Alert>
      </Snackbar>
      <Snackbar open={open2} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Cannot add an empty note
        </Alert>
      </Snackbar>
      <Snackbar open={open3} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Cannot have an empty note
        </Alert>
      </Snackbar> */}
    </div>
  )
}
