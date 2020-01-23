import React, { Component } from "react";

class Issue extends Component {
  render() {
    const { issue } = this.props;
    return (
      <div className="issues-card" key={issue.id}>
        <div className="content">
          <span className="title"><strong>Title:</strong> {issue.title}</span>
          <br />
          <p className="username"><strong>Created By</strong> - {issue.user.login}</p>
          <div className="body">{issue.body}</div>
          <div className="body">
            Follow the link to see the issue <a href={issue.html_url}> => </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Issue;
