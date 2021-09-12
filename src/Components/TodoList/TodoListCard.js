import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import homebgd from "../../Todolist.jpg";

const useStyles = makeStyles({
  root: {
    width: "50vw",
    height: "50vw",
    position: "absolute",
    top: "4vw",
    right:"20vw"
  },
});

export default function TodoListCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        src={homebgd}
        style={{ position: "relative", width: "50vw", top: "4vw" }}
      />
    </div>
  );
}
