import React from "react";

import { NavLink } from "react-router-dom";

import { AppBar, Button, Toolbar, Typography, Grid } from "@material-ui/core";

import akLogo from "../../assets/akLogo.png";
import resume from "../../assets/resume.pdf";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Grid container spacing={6}>
            <Grid item xs>
              <Button>
                <NavLink to="/">
                  <img src={akLogo} alt="A | K logo" className="ak-logo" />
                </NavLink>
              </Button>
            </Grid>
            <Grid item xs>
              <Button>
                <NavLink to="/about" className="nav-item">
                  <Typography variant="h6">About</Typography>
                </NavLink>
              </Button>
            </Grid>
            <Grid item xs>
              <Button>
                <a
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-item">
                  <Typography variant="h6">Resume</Typography>
                </a>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </div>
  );
};

export default NavBar;
