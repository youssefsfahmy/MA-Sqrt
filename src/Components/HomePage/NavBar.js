import React from 'react'
import AppBar from '@material-ui/core/AppBar'
// import Toolbar from "@material-ui/core/Toolbar";
import IconButton from '@material-ui/core/IconButton'
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles'
// import MenuIcon from "@material-ui/icons/Menu";
// import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from '@material-ui/icons/MoreVert'
import MA2 from '../../MA2logo.png'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'
// import Switch from "@material-ui/core/Switch";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'gray',
    flexGrow: 1,
    display: 'flex',
  },
  menuButton: {
    backgroundColor: 'gray',
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 80,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: 'gray',
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  home: {
    backgroundColor: 'gray',
    border: 'none',
    color: 'white',
    fontSize: '18px',
  },
  notes: {
    backgroundColor: 'gray',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
  todo: {
    backgroundColor: 'gray',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
}))

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    // window.localStorage.removeItem('auth')
    setAnchorEl(null)
  }
  const handleClose2 = () => {
    window.localStorage.removeItem('auth')
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <div
          style={{
            display: 'flex',
            backgroundColor: 'gray',
          }}
        >
          <Link to='/home'>
            <img
              src={MA2}
              alt={'LOGO'}
              style={{
                width: '10vw',
                height: '3.5vw',
                position: 'absolute',
                left: '2vw',
                top: '2vw',
              }}
            />
          </Link>
          <div
            className={classes.toolbar}
            style={{
              position: 'relative',
              left: '75vw',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Link to='/Notes'>
              <button id='notes' className={classes.notes}>
                Notes
              </button>
            </Link>
            <Link to='/Todo'>
              <button id='todo' className={classes.todo}>
                To-Do Lists
              </button>
            </Link>
          </div>
          <div
            style={{
              position: 'relative',
              left: '77vw',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to='/'>
                  {' '}
                  <MenuItem onClick={handleClose2}>Sign out</MenuItem>{' '}
                </Link>
                <MenuItem>My account</MenuItem>
              </Menu>
            </div>
            {/* <IconButton
              aria-label="display more actions"
              edge="end"
              color="gray"
            >
              <MoreIcon />
            </IconButton> */}
          </div>
        </div>
      </AppBar>
    </div>
  )
}
