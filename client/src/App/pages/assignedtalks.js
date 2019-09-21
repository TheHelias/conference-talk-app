/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Joint from './join';
import Header from './header';

export default class Assignedtalks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendeelist: [],
      talklist: [],
      talk: '',
      attendee: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  async onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/assign_talk', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const res = await response.text();
      this.setState({ resMess: res});
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount() {
    fetch('/api/attendees')
        .then(response => response.json())
        .then(data => this.setState({ attendeelist: data.attendees }));

    fetch('/api/talks')
        .then(response => response.json()) 
        .then(data => this.setState({ talklist: data.talks }));
  }

  render() {
    const { attendeelist, talklist } = this.state;
    const people = attendeelist.map(attendees => attendees.full_name);
    const talks = talklist.map(list => list.title);

    return (
      <div className="assign-page">
        <Header/>
        <form onSubmit={this.onSubmit}>
        <h2>Attendee </h2>
        <select 
        name='attendee'
        value={this.state.attendee}
        onChange={this.handleInputChange}>
            <option>{people[0]}</option>
            <option>{people[1]}</option>
            <option>{people[2]}</option>
            <option>{people[3]}</option>
            <option>{people[4]}</option>
            <option>{people[5]}</option>
            <option>{people[6]}</option>
            <option>{people[7]}</option>
            <option>{people[8]}</option>
            <option>{people[9]}</option>
        </select>
        <h2>Talk </h2>
        <select 
        name='talk'
        value={this.state.talk}
        onChange={this.handleInputChange}>
            <option>{talks[0]}</option>
            <option>{talks[1]}</option>
            <option>{talks[2]}</option>
            <option>{talks[3]}</option>
            <option>{talks[4]}</option>
            <option>{talks[5]}</option>
            <option>{talks[6]}</option>
            <option>{talks[7]}</option>
            <option>{talks[8]}</option>
            <option>{talks[9]}</option>
        </select>

        <input className="button" type='submit' value='Assign'/>
        </form>
        <p>{this.state.resMess}</p>
        <Joint/>
      </div>
    );
  }
}
