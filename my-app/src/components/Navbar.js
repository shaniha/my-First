import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom'


const NavBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ marginRight: "1em", marginLeft: "1em" }}>
          Tinder
        </Typography>
        <Button color="inherit" onClick={() => { props.history.push("/") }}>Home</Button>
      </Toolbar>
    </AppBar >
  );
}

export default withRouter(NavBar);