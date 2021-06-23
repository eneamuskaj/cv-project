import React from "react";

class Presentation extends React.Component {
  render(props) {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Presentation;
