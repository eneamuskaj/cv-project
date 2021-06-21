import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Education</h1>
        <form>
          <input type="text" name="name" placeholder="University" />
          <br />
          <input type="text" name="name" placeholder="Major" />
          <br />
          <input type="text" name="name" placeholder="Year" />
          <br />
          <input type="text" name="name" placeholder="GPA" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Education;
