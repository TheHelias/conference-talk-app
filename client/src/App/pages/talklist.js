/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Joint from './Joint';
import Header from './header';

export default class Talklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talklist: [],
    };
  }

  componentDidMount() {
    fetch('/api/talks')
      .then(response => response.json())
      .then(data => this.setState({ talklist: data.talks }));

    const { match: { params }} = this.props;
    fetch(`/api/talks/${params.talkId}`)
  }
  

  render() {
    const { talklist } = this.state;
    return (
      <div className="talklist-div">
        <Header/>
        <h2>Talks </h2>
      <ul>
        {talklist.map(talks => <li key={talks._id}>
            <Link className='link' to={`/talklist/${talks._id}`}> {talks.title} </Link>
            <p> {talks.time_limit} </p>
          </li>)}
      </ul>
      <Joint/>
      </div>
    );
  }
}
