import { Component } from "react";
import './Account.css';


class Account extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      if(this.props.isActive)
        return (
          <div>
              <h1>Account Status : Activated</h1>
          </div>
        );
      return (
          <div>
              <h1>Account Status : Pending</h1>
          </div>
        );
    }
  }
  export default Account;