import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Joint from './Joint';
import Header from './header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      full_name: '',
      email: '',
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
      const response = await fetch('/api/add_attendee', {
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
      <div className='attendee-div'>
        <form onSubmit={this.onSubmit}>
        <p>Input your details if you want to attend the conference!</p>
        <div>
        <input
          type="text"
          name="full_name"
          placeholder="Enter Full name"
          value={this.state.full_name}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        </div>
        <div>
        <input className="button" type="submit" value="Attend" />
        </div>
      </form>
      <p>{this.state.resMess}</p>
      <div className="talk-div">
          <Link className="link" to='/talk'>Click this to add a talk</Link>
      </div>
      <Joint/>
      </div>
      </div>
    );
  }
}
