import React from "react";

class Presentation extends React.Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.lastName}</h1>
        <h3>{this.props.eMail}</h3>
        <h3>{this.props.phone}</h3>
        <h2>{this.props.university}</h2>
        <h3>{this.props.major}</h3>
        <h2>{this.props.year}</h2>
        <h3>{this.props.gpa}</h3>
        <h3>{this.props.company}</h3>
        <h4>{this.props.startingDate}</h4>
        <p>{this.props.position}</p>
      </div>
    );
  }
}

export default Presentation;
