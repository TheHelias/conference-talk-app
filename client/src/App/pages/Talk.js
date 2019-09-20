import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Joint from './Joint';
import Header from './header';

export default class Talk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time_limit: '',
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
      const response = await fetch('/api/add_talk', {
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

  render() {
    return (
      <div>
        <Header/>
      <div className='talk-div'>
        <form onSubmit={this.onSubmit}>
        <p>Input the details of the talk</p>
        <div>
        <input
          type="text"
          name="title"
          placeholder="Input The Talk Title"
          value={this.state.title}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input
          type="text"
          name="time_limit"
          placeholder="Time Allowed for Talk"
          value={this.state.time_limit}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input className="button" type="submit" value="Book Talk" />
        </div>
      </form>
      <p>{this.state.resMess}</p>
      <div className="talk-div">
          <Link className="link" to='/'>Click here to book a seat at the conference</Link>
      </div>
      <Joint/>
      </div>
      </div>
    );
  }
}
