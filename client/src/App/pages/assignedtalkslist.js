/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';

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
      <ul>
        {assignedtalklist.map(list => <li key={list._id}>
            <h4> {list.talk} </h4>
            <p> {list.attendee} </p>
            {/* <form onSubmit="this.handleSubmit">
              <input 
                id = {talks._id}
                value="delete"
                type="submit"
              />
            </form> */}
          </li>)}
      </ul>
    );
  }
}
