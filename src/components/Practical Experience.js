import React from "react";

class PracticalExperience extends React.Component {
  render(props) {
    return (
      <div className="container">
        <h1>Practical Experience</h1>
        <form>
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.props.handleChange}
            value={this.props.company}
          />
          <br />
          <input
            type="text"
            name="startingDate"
            placeholder="Starting Date"
            onChange={this.props.handleChange}
            value={this.props.startingDate}
          />
          <br />
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.props.handleChange}
            value={this.props.position}
          />
          <br />
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
