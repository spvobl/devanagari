import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#2E3B55",
    paddingBottom: "5px",
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <MenuIcon />
        <Typography variant="h4" className={classes.title}>
          देवनागरी
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
