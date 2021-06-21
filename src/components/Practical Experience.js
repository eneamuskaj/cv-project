import React from "react";

class PracticalExperience extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Practical Experience</h1>
        <form>
          <input type="text" name="name" placeholder="Company" />
          <br />
          <input type="text" name="name" placeholder="Starting Date" />
          <br />
          <input type="text" name="name" placeholder="Position" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PracticalExperience;
