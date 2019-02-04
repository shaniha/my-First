import React, { Component } from 'react';
import NavBar from './components/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import ErrorPage from './components/error'
import About from './components/about'
import Home from './components/home';
import { Grid } from '@material-ui/core';

class TinderApp extends Component {
    render() {
        return (
            <>
                <Grid container direction="column">
                    <Grid item style={{ marginBottom: "1em" }}>
                        <NavBar></NavBar>
                    </Grid>
                    {/* <OldNav></OldNav> */}
                    <Grid item style={{ padding: "1em" }}>
                        <Grid container direction="row" alignItems="stretch">
                            <Grid item md={4}>
                            </Grid>
                            <Grid item md={4} xs={12} >
                                <Switch>
                                    <Route path="/" exact component={Home} />
                                    <Route path="/about" component={About} />
                                    <Route path="/error" component={ErrorPage} />
                                    <Redirect to="/error" />
                                </Switch>
                            </Grid>
                            <Grid item md={4}>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </>
        );
    }
}
export default TinderApp;