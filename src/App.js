import { Component } from "react";
import './App.css';
import { User } from "./User";
import { BottomInfo } from "./BottomInfo";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/?results=30";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({users: data.results});
  }

  render() {
    return <div>
        {!this.state.users ? <p className="loading">LOADING ...</p> :
        <div className="column">
          <h1>Random Users</h1>
      <div className="users-container">
        {this.state.users.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>
      <BottomInfo />
      </div>  
      }          
      </div>
  }

}
