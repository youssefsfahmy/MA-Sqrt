import React from 'react'
import NoteCard from './NoteCard'
import NoteInput from '../../Components/Notes/NoteInput'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    notes:{
        display: "flex",
        flexWrap: "wrap",
    }
  }));
export default function Notes() {
    const classes = useStyles();
    const [arr,setArr]=React.useState([])
    const [el,setEl]=React.useState()
    const[button,setButton]=React.useState(false)
    const [id,setId]=React.useState(0)
    console.log(arr)
    // React.useEffect(() => {
    //     // Update the document title using the browser API
    //     setArr(arr)
    //   },[button])
    return (

        <div className={classes.root}>
            <h1>My Notess</h1>
            <NoteInput arr={arr} setArr={setArr} setButton={setButton} button={button} id={id} setId={setId}/>
            <div className={classes.notes}>
                {
                    arr.map((elem)=>
                        <NoteCard arr={arr} setArr={setArr} elem={elem}/>
                    )
                }

            </div>
        </div>
    )
}
