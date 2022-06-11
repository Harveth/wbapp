import { Component } from "react";
import { Link } from 'react-router-dom';

import './Not_Found.css';

class Not_Found extends Component {
  render() {
    return (
      <div className='row align-items-center main-container404'>
        <h1>404 - Not Found!</h1>
        <h4>The page you reqeusted does not exists or has been moved permenantly</h4>
      </div>
    );
  }
}
export default Not_Found;