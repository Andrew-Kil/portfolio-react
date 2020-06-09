import React from "react";

import { Switch, Route } from "react-router-dom";

import { useScrollTrigger, Fab, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Home from "./components/Home";
import Footer from "./components/Footer";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ScrollTop = (props) => {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

const App = (props) => {
  return (
    <div className="app">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}>
          {Home}
        </Route>
        <Route exact path="/" component={Main}>
          {Main}
        </Route>
      </Switch>
      <Footer></Footer>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="Scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
};

export default App;
