import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, FormControl, InputLabel, TextField, NativeSelect, Input, FormHelperText, ButtonBase } from "@material-ui/core"
import findImage from '../images/find.png'


class Home2 extends Component {
  state = {
    gender: '',
    minAge: '',
    maxAge: ''
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSearch = (e) => {
    this.props.history.push({
      pathname: "/about", state: {
        ...this.state
      }
    });
  }
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Find matches
          </Typography>

          <form>
            <Grid container direction="column">
              <FormControl >
                <InputLabel htmlFor="gender">Select partner gender</InputLabel>
                <NativeSelect
                  value={this.state.gender}
                  onChange={this.handleChange}
                  input={<Input name="gender" id="gender" />}
                >
                  <option value="" disabled hidden />
                  <option >Female</option>
                  <option>Male</option>
                </NativeSelect>
                <FormHelperText >Gender</FormHelperText>
              </FormControl>

              <FormControl >
                <TextField
                  helperText="Min age"
                  id="minAge"
                  name="minAge"
                  label="Age between "
                  value={this.state.minAge}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl>
                <TextField
                  helperText="Max age"
                  id="maxAge"
                  name="maxAge"
                  label="to"
                  value={this.state.maxAge}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal">
                <span style={{ textAlign: "center" }}>
                  <ButtonBase onClick={this.handleSearch}>
                    <img src={findImage} style={{ height: "5em", width: "auto" }} alt=""></img>
                  </ButtonBase>
                </span>
              </FormControl>
            </Grid>
          </form>
        </CardContent >
      </Card >
    );
  }
}

export default Home2;