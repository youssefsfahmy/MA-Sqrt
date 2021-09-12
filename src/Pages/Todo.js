import React, { useContext, useState, useEffect } from "react";
import Sidebar from "../Components/TodoList/Sidebar";
import Newsidebar from "../Components/TodoList/Newsidebar";
import TodoList from "../Components/TodoList/TodoList";
import NavBar from "../Components/HomePage/NavBar";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { BottomNavigation } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

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
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
export default function Todo() {
  const classes = useStyles()

  const [all, setAll] = useState([])
  const [cur, setCur] = useState(-1)
  const [curId, setCurId] = useState('')
  const [listTitle, setListTitle] = useState('')
  const [change, setChange] = useState(false)
  const [open, setOpen] = React.useState(false) //snackbar
  const [popup, setPopup] = React.useState({ message: '', severity: '' })
  const history = useHistory()

  useEffect(() => {
    console.log(window.localStorage, 'dsfsdfsf')
    if (window.localStorage.getItem('auth') == null) {
      console.log('its null')
      history.push('/')
    }
  }, [])



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }
  useEffect(() => {
    // console.log('effect')
    axios
      .post(
        'http://localhost:8000/users/getmylists',
        {},
        { headers: { auth: window.localStorage.getItem('auth') } }
      )
      .then((res) => {
        if (res.data.statusCode === 0) {
          // console.log(res.data.data)
          setAll(res.data.data)
          // setPopup({ message: res.data.message, severiy: 'success' })
        } else {
          setPopup({ message: res.data.error, severiy: 'error' })
          setOpen(true)
        }
      })
      .catch((err) => console.log(err))
  }, [change])
  // console.log(all)
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <Newsidebar
          style={{ positon: "relative!important" }}
          all={all}
          setAll={setAll}
          change={change}
          setChange={setChange}
          cur={cur}
          setCur={setCur}
          curId={curId}
          setCurId={setCurId}
          setListTitle={setListTitle}
          setOpen={setOpen}
          setPopup={setPopup}
        />
        <TodoList
          style={{ backgroundColor: 'whitesmoke' }}
          all={all}
          setAll={setAll}
          cur={cur}
          setCur={setCur}
          change={change}
          setChange={setChange}
          curId={curId}
          setCurId={setCurId}
          listTitle={listTitle}
          setListTitle={setListTitle}
          setOpen={setOpen}
          setPopup={setPopup}
        />
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={popup.severity}>
          {popup.message}
        </Alert>
      </Snackbar>
      {/* <BottomNavigation className={classes.footer}>
        <h2 style={{ color: "white" }}>Copyrights to MA^2 team</h2>
      </BottomNavigation> */}
    </div>
  )
}
