import React from "react";

class GeneralInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      eMail: "",
      phone: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, type } = event.target;
    this.setState({ [name]: event.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <h1>General Info</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <br />
          <input
            type="text"
            name="eMail"
            placeholder="E Mail"
            onChange={this.handleChange}
            value={this.state.eMail}
          />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={this.handleChange}
            value={this.state.phone}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
