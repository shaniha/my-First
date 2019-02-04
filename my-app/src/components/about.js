import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import imgDefult from "../images/defult.jpg";
import Background from "../images/love.jpg";
import like from "../images/like.jpg";
import next from "../images/next.png";
import { ButtonBase, Card, CardContent } from "@material-ui/core";

const serverUrl = "http://localhost:56500/api/persons";
const serverImagePath = "http://localhost:56500/tinder/"

class About extends Component {
  constructor (props) {
    super(props);
    this.state = {
      persons: null
    }
    let filters = this.props.location.state;
    if (filters !== undefined) {
      this.filters = {
        ...filters
      }
    }
  }

  handleNext = () => {
    const [, ...persons] = this.state.persons;
    this.setState({ persons });
    //call database to pass
  }
  handleLike = () => {
    const [, ...persons] = this.state.persons;
    this.setState({ persons });
    //call database to like
  }
  componentDidMount() {
    if (this.filters) {
      const { gender, minAge, maxAge } = this.filters;
      fetch(serverUrl)
        .then(data => data.json())
        .then(persons => {
          const filtered = persons.filter(p => {
            return p.Age <= maxAge && p.Age >= minAge && p.Gender === gender;
          });
          this.setState({ persons: filtered })
        }).catch(error => {
          this.setState({ error: true });
        })
    }
  }
  render() {
    if (this.filters === undefined || this.state.error) {
      return <Redirect to="/error"></Redirect>
    }

    if (this.state.persons == null) {
      return <div>loading...</div>
    }
    const person = this.state.persons[0];
    return (
      person ? (
        <Card>
          <CardContent>
            <div className="text-center" style={{ backgroundImage: "url(" + Background + ")", textAlign: 'center' }}>
              <h1> {person.Name}</h1>
              <br />
              <img id="imgPerson" alt="" src={person.Image ? serverImagePath + person.Image : imgDefult} style={{ width: "6em", height: "auto" }} />
              <br />
              <br />

              <br />
              <br />
              <div>
                <p>Age: {person.Age}</p>
                <p>Height: {person.Height}</p>
                <p>Location: {person.Address}</p>
                {person.IsPremium ? (
                  <>
                    <p>My Hobbies</p>
                    <p>{person.Hobbies.join(",")}</p>
                  </>
                ) : (null)}
              </div>
              < div >
                <ButtonBase onClick={this.handleLike} style={{ float: "left" }}>
                  <img id="likeB" src={like} alt="" style={{ width: "6em", height: "auto" }} />
                </ButtonBase>
                <ButtonBase onClick={this.handleNext} style={{ float: 'right' }}>
                  <img id="likeB" src={next} alt="" style={{ width: "6em", height: "auto" }} />
                </ButtonBase>
              </div>
            </div>
          </CardContent>
        </Card >) : (<div>No more persons...</div>)
    );
  }

}

export default About;
