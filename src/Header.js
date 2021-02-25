import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    flexGrow: 1,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <PermIdentityIcon></PermIdentityIcon>
          <Button color="inherit">TINDER APP</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
