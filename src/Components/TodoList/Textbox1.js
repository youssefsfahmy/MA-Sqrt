import { React, useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import AddBoxIcon from '@material-ui/icons/AddBox'
import axios from 'axios'

// import { createContext } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}))

export default function BasicTextFields(props) {
  const classes = useStyles()

  const [text, setText] = useState('')

  const clickHandle = (e) => {
    console.log(props.all)
    axios
      .post(
        'http://localhost:8000/todo/addnewtask',
        {
          Todo: {
            content: text,
            priority: '1',
            listId: props.curId,
            isComplete: false,
          },
        },
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setChange2(!props.change2)
          props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
        }
        props.setOpen(true)
      })
      .catch((err) => console.log(err))
    // props.setaddd(true)

    // const newTodo = {
    //   isComplete: false,
    //   text: text,
    //   key:
    //     props.arrayy.length === 0
    //       ? 1
    //       : props.arrayy[props.arrayy.length - 1].key + 1,
    //   editMode: false,
    // }
    setText('')
    // console.log(newTodo);
    // props.setArrayy([...props.arrayy, newTodo])
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
    // console.log(e.target.value)
  }

  return (
    // <form className={classes.root} noValidate autoComplete='off'>
    <TextField
      className={classes.root}
      noValidate
      autoComplete='off'
      id='filled-basic'
      label=''
      variant='filled'
      value={text}
      onChange={handleInputChange}
      InputProps={{
        startAdornment: (
          <AddBoxIcon
            style={{ cursor: 'pointer' }}
            onClick={clickHandle}
            className='addbox'
          />
        ),
      }}
    />
    // </form>
  )
}
