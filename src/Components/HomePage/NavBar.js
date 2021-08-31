import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import MA2 from "../../MA2logo.png";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 80,
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: "#CC4D4D",
  },
  title: {
    flexGrow: 1,
    alignSelf: "flex-end",
  },
  home: {
    backgroundColor: "#CC4D4D",
    border: "none",
    color: "white",
    fontSize: "18px",
  },
  notes: {
    backgroundColor: "#CC4D4D",
    border: "none",
    color: "white",
    fontSize: "18px",
  },
  todo: {
    backgroundColor: "#CC4D4D",
    border: "none",
    color: "white",
    fontSize: "18px",
  },
}));

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <div
          style={{
            display: "flex",
            backgroundColor: "#CC4D4D",
          }}
        >
          <Link to="/">
            <img
              src={MA2}
              alt={"LOGO"}
              style={{
                width: "10vw",
                height: "3.5vw",
                position: "relative",
                left: "2vw",
                top: "2vw",
              }}
            />
          </Link>
          <div
            className={classes.toolbar}
            style={{
              position: "relative",
              left: "64vw",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Link to="/Notes">
              <button id="notes" className={classes.notes}>
                Notes
              </button>
            </Link>
            <Link to="/Todo">
              <button id="todo" className={classes.todo}>
                To-Do List
              </button>
            </Link>
          </div>
          <div
            style={{
              position: "relative",
              left: "66vw",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <Link to="/login">
                  {" "}
                  <MenuItem onClick={handleClose}>Sign out</MenuItem>{" "}
                </Link>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
            <IconButton
              aria-label="display more actions"
              edge="end"
              color="#CC4D4D"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
