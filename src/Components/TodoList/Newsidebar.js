import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import axios from 'axios'
import AddBoxIcon from '@material-ui/icons/AddBox'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: '4vw',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    positon: 'relative',
  },
  // necessary for content to be below app bar
  toolbar: {
    fontSize: '2vw',
    textAlignLast: 'center',
    // marginTop: "2vw",
    fontFamily: 'fantasy',
    color: 'slategrey',
  },
  addnew: {
    fontSize: '1vw',
    textAlignLast: 'center',
    // marginTop: "2vw",
    fontFamily: 'fantasy',
    color: 'slategrey',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    positon: 'relative',
  },
  list: {
    width: 250,
    positon: 'relative',
  },
  fullList: {
    width: 'auto',
    positon: 'relative',
  },
  button: {
    fontSize: '2vw',
    fontFamily: 'sans-serif',
  },
}))

export default function Newsidebar(props) {
  const classes = useStyles()
  const [title, setTitle] = useState('')
  const [key, setKey] = useState(0)
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  React.useEffect(() => {
    setTitle('')
  }, [state])

  const handleK = (e) => {
    setTitle(e.target.value)
  }

  const onClick = () => {
    axios
      .post(
        'http://localhost:8000/todolist/addnewlist',
        {
          Todolist: {
            title,
          },
        },
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          props.setCurId(res.data.newList._id)
          props.setChange(!props.change)
          props.setPopup({ message: res.data.message, severity: 'success' })
          props.setTitle('')
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
        }
        props.setOpen(true)
      })
      .catch((err) => console.log(err))
  }
  const handleDelete = (id2) => {
    console.log('maya masalan', id2)
    axios
      .post(
        'http://localhost:8000/todolist/deletelist',
        {
          id: id2,
        },
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        console.log(res)
        if (res.data.statusCode === 0) {
          props.setChange(!props.change)
          props.setCurId('')
          props.setPopup({ message: res.data.message, severity: 'success' })
        } else {
          props.setPopup({ message: res.data.error, severity: 'error' })
        }
        props.setOpen(true)
      })
      .catch((err) => console.log(err))
  }

  const onClick2 = (e, id) => {
    props.setCurId(id)
    props.setChange(!props.change)
  }
  const list = () => (
    <div style={{ positon: 'relative' }}>
      <List>
        {props.all.map((elem, index) => (
          <>
            <ListItem button key={elem.title}>
              <ListItemText
                onClick={(e) => onClick2(e, elem._id)}
                primary={elem.title}
              />
              <ListItemIcon onClick={() => handleDelete(elem._id)}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          </>
        ))}
      </List>
      <Divider />

      <ListItem>
        <ListItemIcon key={'Add'} onClick={onClick}>
          <AddBoxIcon style={{ cursor: 'pointer' }} />
        </ListItemIcon>
        <input onChange={handleK} />
      </ListItem>
      {/* <Divider /> */}
      <p className={classes.addnew}>Add a new list</p>
    </div>
  )

  return (
    <div className={classes.root}>
      <CssBaseline style={{ positon: 'relative' }} />
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar}>MY LISTS</div>
        <Divider />
        {list()}
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  )
}
