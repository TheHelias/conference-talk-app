/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Joint from './join';
import Header from './header';

export default class TalkInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      talkinfo: [],
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.Delete()
  }

  Delete() {
    const { match: { params }} = this.props;
    fetch(`/api/delete_talk/${params.talkId}`, {
      method: 'POST',
    })
    alert('Deleted, go back to talk list')
  }

  componentDidMount() {
    const { match: { params }} = this.props;
    fetch(`/api/get_talk/${params.talkId}`)
      .then(response => response.json())
      .then(data => this.setState({ talkinfo: data.talk }));
  }

  render() {
    const { talkinfo } = this.state;
    return (
      <div>
        <Header/>
        <h1>Title</h1>
        <p>{talkinfo.title}</p>
        <h1>Time Allowed</h1>
        <p>{talkinfo.time_limit}</p>
        <h1>Talk Summary</h1>
        <p>{talkinfo.talk_summary}</p>
        <h5>Click the button below to delete this talk</h5>
        <form onSubmit={this.onSubmit}>
          <input className="button" type="submit" value="Delete" />
        </form>
        <Joint/>
      </div>
    );
  }
}
