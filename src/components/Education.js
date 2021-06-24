import React from "react";

class Education extends React.Component {
  render(props) {
    return (
      <div className="container">
        <h1>Education</h1>
        <form>
          <input
            type="text"
            name="university"
            placeholder="University"
            value={this.props.university}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={this.props.major}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={this.props.year}
            onChange={this.props.handleChange}
          />
          <br />
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            value={this.props.gpa}
            onChange={this.props.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Education;
