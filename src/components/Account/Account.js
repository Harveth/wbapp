import { Component } from "react";
import Avatar from '@mui/material/Avatar';

import './Account.css';


class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container ">
        <div className="col md-9 info">
          <h1><Avatar src={require("../../Assets/Images/MainLogoClear.png")} />
          Name here
          </h1>
          </div>
        </div>
        )
    // if (this.props.isActive)
    //   return (
    //         <div>
    //             <h1>Account Status : Activated</h1>
    //         </div>
    //       );
    //     return (
    //         <div>
    //             <h1>Account Status : Pending</h1>
    //         </div>
    //   );
  }
}
        export default Account;