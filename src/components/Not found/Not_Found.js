import { Component } from "react";
import { Link } from 'react-router-dom';

import './Not_Found.css';

class Not_Found extends Component {
  render() {
    return (
      <div className='main-container404'>
        <h1>404 - Not Found!</h1>
      </div>
    );
  }
}
export default Not_Found;