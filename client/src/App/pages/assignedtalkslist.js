/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Joint from './join';
import Header from './header';

export default class AssignedTalksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignedtalklist: [],
    };
  }

  componentDidMount() {
    fetch('/api/assigned_talks')
      .then(response => response.json())
      .then(data => this.setState({ assignedtalklist: data.assignedtalks }));
  }

  render() {
    const { assignedtalklist } = this.state;
    return (
      <div className="assignedlist-div">
        <Header/>
        <h2>Assigned Talks </h2>
      <ul>
        {assignedtalklist.map(list => <li key={list._id}>
            <h3> {list.talk} </h3>
            <p> {list.attendee} </p>
          </li>)}
      </ul>
      <Joint/>
      </div>
    );
  }
}
