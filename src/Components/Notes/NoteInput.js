import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Card from '@material-ui/core/Card'
import AddBoxIcon from '@material-ui/icons/AddBox'
import axios from 'axios'
import UserIdcontext from '../LogIn/UserIdcontext'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
    // width: "48vw"
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  box: {
    width: '49vw',
  },
  //   fourtys:{
  //       width: "48vw"
  //   }
}))
export default function NoteInput(props) {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    title: '',
    content: '',
  })
  const [id, setId] = React.useContext(UserIdcontext)

  // const [note,setNote]=React.useState({title:"",content:""})
  const [expand, setExpand] = React.useState(false)
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleExpand = () => {
    setExpand(true)
  }
  const ti = (num) => {
    if (num < 10) {
      return '0' + num
    }
    return num
  }
  const addNote = () => {
    axios
      .post(
        'http://localhost:8000/notes/addnote',
        { Note: values },
        { headers: { auth: id } }
      )
      .then((res) => {
        // console.log(res.data.data)
        if (res.data.statusCode === 0) {
          props.setChange(!props.change)
          setExpand(false)
          setValues({ title: '', content: '' })
          props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
        }
      })
      .catch((err) => console.log(err))
    props.setOpen(true)
  }
  return (
    <div>
      <Card
        style={{
          maxWidth: '50vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {expand ? (
          <FormControl fullWidth className={classes.margin} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-amount'>Title</InputLabel>
            <OutlinedInput
              className={classes.box}
              id='outlined-adornment-amount'
              value={values.title}
              onChange={handleChange('title')}
              labelWidth={60}
              autoComplete={'off'}
            />
          </FormControl>
        ) : (
          <></>
        )}
        <FormControl fullWidth className={classes.margin} variant='outlined'>
          <InputLabel htmlFor='outlined-adornment-amount'>
            Take a note
          </InputLabel>
          <OutlinedInput
            className={classes.box}
            id='outlined-adornment-amount'
            value={values.content}
            onChange={handleChange('content')}
            onClick={handleExpand}
            multiline
            rows={expand ? 5 : 1}
            labelWidth={90}
            autoComplete={'off'}
          />
        </FormControl>
        {expand ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton color='primary' onClick={addNote}>
              <AddBoxIcon />
            </IconButton>
          </div>
        ) : (
          <></>
        )}
      </Card>
    </div>
  )
}
