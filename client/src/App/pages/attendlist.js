/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

export default class Attendlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendlist: [],
    };
  }

  componentDidMount() {
    fetch('/api/attendees')
      .then(response => response.json())
      .then(data => this.setState({ attendlist: data.attendees }));
  }

  render() {
    const { attendlist } = this.state;
    return (
      <ul>
        {attendlist.map(attendees => <li key={attendees.id}>
            <p>{attendees.full_name}</p>
          </li>)}
      </ul>
    );
  }
}
