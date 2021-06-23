import React from "react";

class GeneralInfo extends React.Component {
  render(props) {
    return (
      <div className="container">
        <h1>General Info</h1>
        <form>
          <input
            type="text"
            name="name"
            placeholder="First Name"
            onChange={this.props.handleChange}
            value={this.props.name}
          />
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.props.handleChange}
            value={this.props.lastName}
          />
          <br />
          <input
            type="text"
            name="eMail"
            placeholder="E Mail"
            onChange={this.props.handleChange}
            value={this.props.eMail}
          />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={this.props.handleChange}
            value={this.props.phone}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
