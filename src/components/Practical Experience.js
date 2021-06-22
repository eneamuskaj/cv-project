import React from "react";

class PracticalExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      company: "",
      startingDate: "",
      position: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, type } = event.target;
    this.setState({
      [name]: event.target.value,
    });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <h1>Practical Experience</h1>
        <form>
          <input
            type="text"
            name="company"
            placeholder="Company"
            onChange={this.handleChange}
            value={this.state.company}
          />
          <br />
          <input
            type="text"
            name="startingDate"
            placeholder="Starting Date"
            onChange={this.handleChange}
            value={this.state.startingDate}
          />
          <br />
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.handleChange}
            value={this.state.position}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
