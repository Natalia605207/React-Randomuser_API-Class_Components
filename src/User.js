import { Component } from "react";
import { ImCalendar } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";
import { IoLockClosedSharp } from "react-icons/io5";

export class User extends Component {
    render() {
        return(
            <div className="user-info column">
            <img src={this.props.user.picture.large} alt="user" className="user-photo" />
            <div className="user-details">
              <p className="user-name">{this.props.user.name.first} {this.props.user.name.last}</p>
              <p className="other-data"><ImCalendar className="icon" /> {this.props.user.dob.age} years old</p>
              <p className="other-data"><ImLocation2 className="icon" /> {this.props.user.location.street.number} {this.props.user.location.street.name} {this.props.user.location.city}, {this.props.user.location.country} {this.props.user.location.postcode}</p>
              <p className="other-data"><ImPhone className="icon" /> {this.props.user.cell}</p>
              <p className="other-data"><ImEnvelop className="icon" /> {this.props.user.email}</p>
              <p className="other-data"><IoLockClosedSharp className="icon" />Username: {this.props.user.login.username} Password: {this.props.user.login.password}</p>
            </div>
          </div>
        )
    }
}