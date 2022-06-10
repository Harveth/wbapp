import { Component } from "react";
import { yellow } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import './Account.css';

const SERVER = "http://localhost:6969";


class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container row p-3">
          <form>
          <Avatar sx={{ bgcolor: yellow[500] }}>F</Avatar>
          <div class="row">
            <div class="col">
            <label for="fn" class="form-label" >First name</label>
              <input type="text" class="form-control" id="fn" placeholder="First name" aria-label="First name" value="Mohamed"/>
            </div>
            <div class="col">
            <label for="ln" class="form-label">Last name</label>
              <input type="text" class="form-control" id="ln" placeholder="Last name" aria-label="Last name" value="Ahmad"/>
            </div>
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" placeholder="firstnname.lastname@mail.com" class="form-control" id="inputEmail4" value="Mohamed@gmail.com"/>
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">Password</label>
            <input type="password" placeholder="Enter new password"class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value="20 some street "/>
          </div>
          <div class="col mt-2">
          <button type="submit" class="btn btn-primary" >Save changes</button>
          </div>
          </form>
        {/* Name : USER_FULL_NAME
        Status : ACCOUNT_STATUS
        Phone : USER_PHONE
        Address : USER_ADDRESS */}
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