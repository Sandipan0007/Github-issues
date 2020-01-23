import React, { Component } from "react";
import Issue from "./Issues/Issue";

class Input extends Component {
  state = {
    issues: [],  
    userName: "",
    repoName: ""
  };

  handleUsername = (event) => {
    this.setState({username:event.target.value})
  }

  handleReponame = (event) => {
      this.setState({reponame:event.target.value})
  }

  onSubmit = async () => {
    const response = await fetch(`https://api.github.com/repos/${this.state.username}/${this.state.reponame}/issues`)
    if(response.status===200){
       
        let data = await response.json()
        console.log(data)
        this.setState({issues:data})
    }
    else{
        console.log("WRONG ATTEMPT");
    }
}

  render() {
    return (
      <div className="container">
        <div className="input">
          <span>Your Github Name </span>
          <input
            className="text-input"
            type="text"
            name="userName"
            placeholder="Enter Your Username"
            onChange={this.handleUsername}
          />
          <span>Your Github Repository Name </span>
          <input
            className="text-input"
            type="text"
            name="repoName"
            placeholder="Enter your Repository Name"
            onChange={this.handleReponame}
          />
          <button onClick={this.onSubmit}>Fetch Issues</button>
        </div>
        <div className="issues-container">
          {this.state.issues.map(issue => (
            <Issue issue={issue} />
            // console.log(issue)
          ))}
        </div>
      </div>
    );
  }
}

export default Input;
