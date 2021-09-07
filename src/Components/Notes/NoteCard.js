import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import ShareIcon from '@material-ui/icons/Share'
import { AiOutlinePushpin, AiFillPushpin, AiFillDelete } from 'react-icons/ai'
import { RiAlarmFill } from 'react-icons/ri'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import axios from 'axios'
// import UserIdcontext from '../LogIn/UserIdcontext'
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '1vw',
    height: 'fit-content',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  dial: {
    display: 'flex',
    flexDirection: 'column',
    width: '30vw',
    // height: "30vw",
    justifyContent: 'center',
    // overflow: "hidden"
  },
  dial2: {},
  noteContent: {
    // width: "12vfitw"
  },
  pp: {
    wordBreak: 'break-all',
  },
}))

export default function NoteCard(props) {
  const classes = useStyles()

  //////////// STATES /////////////////
  const [open, setOpen] = React.useState(false)
  const [noteValues, setNoteValues] = React.useState({
    id: props.noteId,
    title: props.elem.title,
    content: props.elem.content,
    isPinned: props.elem.isPinned,
  })
  // const [id, setId] = React.useContext(UserIdcontext)
  React.useEffect(() => {
    setNoteValues({
      id: props.noteId,
      title: props.elem.title,
      content: props.elem.content,
      isPinned: props.elem.isPinned,
    })
  }, [props.elem, props.noteId])
  ///////////////// callbacks//////////////
  const handleChange = (event, field) => {
    setNoteValues({ ...noteValues, [field]: event.target.value })
  }
  const onDelete = (event) => {
    axios
      .post(
        'http://localhost:8000/notes/deletenote',
        { id: noteValues.id },
        {
          headers: { auth: window.localStorage.getItem('auth') },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setChange(!props.change)
          props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
        }
      })
      .catch((err) => console.log(err))
    props.setOpen(true)
  }
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handlePin = () => {
    axios
      .post(
        'http://localhost:8000/notes/updatenote',
        { ...noteValues, isPinned: !noteValues.isPinned },
        {
          headers: { auth: window.localStorage.getItem('auth') },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setChange(!props.change)
        } else {
        }
      })
      .catch((err) => console.log(err))
  }
  const ti = (num) => {
    if (num < 10) {
      return '0' + num
    }
    return num
  }
  const format = (currentdate) => {
    // console.log('date ', typeof currentdate)
    const dt =
      '' +
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      ti(currentdate.getHours()) +
      ':' +
      ti(currentdate.getMinutes()) +
      ':' +
      ti(currentdate.getSeconds())
    return dt
  }
  const handleClose = () => {
    axios
      .post('http://localhost:8000/notes/updatenote', noteValues, {
        headers: { auth: window.localStorage.getItem('auth') },
      })
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setChange(!props.change)
          setOpen(false)
          if (res.data.edited) {
            props.setPopup({ message: res.data.message, severity: 'success' })
            props.setOpen(true)
          }
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
          props.setOpen(true)
        }
      })
      .catch((err) => console.log(err))
  }
  /////// desgin ///////////
  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label='settings' onClick={handlePin}>
              {props.elem.isPinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
            </IconButton>
          }
          title={props.elem.title}
          subheader={format(new Date(props.elem.lastEdited))}
        />
        <CardContent onClick={handleClickOpen} className={classes.noteContent}>
          <p className={classes.pp}>{props.elem.content}</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='alarm'>
            <RiAlarmFill />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton aria-label='delete' onClick={onDelete}>
            <AiFillDelete />
          </IconButton>
        </CardActions>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogContent className={classes.dial}>
          <TextField
            id='outlined-multiline-flexible'
            // label="Multiline"
            multiline
            maxRows={4}
            value={noteValues.title}
            defaultValue={''}
            onChange={(e) => handleChange(e, 'title')}
            variant='outlined'
            style={{ overflow: 'hidden' }}
          />
          <TextField
            id='outlined-multiline-static'
            // label="Multiline"
            multiline
            rows={5}
            // defaultValue="Default Value"
            value={noteValues.content}
            variant='outlined'
            onChange={(e) => handleChange(e, 'content')}
            className={classes.field}
            style={{ overflow: 'hidden' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
