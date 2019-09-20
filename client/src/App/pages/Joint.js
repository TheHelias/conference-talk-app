import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Joint = () => {

    return (
      <div className='joint-div'>
        <span>Want to add an attendee to a talk?</span>
        <Link className="link" to='#'>Click here</Link>
        <div>
        <Link className="link" to='/talklist'>List of Talks</Link>
        <Link className="link" to='/attendlist'>List of Attendees</Link>
        </div>
        <div>
          <Link className="link" to='/assignedtalks'>Assign a talk</Link>
        </div>
        <div>
          <Link className="link" to='/assignedtalkslist'>List of Assigned Talks</Link>
        </div>
      </div>
    );
}

export default Joint;