import React from "react";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/Practical Experience";
import Presentation from "./components/Presentation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      lastName: "",
      eMail: "",
      phone: "",
      university: "",
      major: "",
      year: "",
      gpa: "",
      company: "",
      startingDate: "",
      position: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name } = event.target;
    this.setState({ [name]: event.target.value });
  }
  render() {
    return (
      <div className="mainDisplay">
        <div className="inputDisplay">
          <GeneralInfo
            name={this.state.name}
            lastName={this.state.lastName}
            eMail={this.state.eMail}
            phone={this.state.phone}
            handleChange={this.handleChange}
          />
          <Education
            university={this.state.university}
            major={this.state.major}
            year={this.state.year}
            gpa={this.state.gpa}
            handleChange={this.handleChange}
          />
          <PracticalExperience
            company={this.state.company}
            startingDate={this.state.startingDate}
            position={this.state.position}
            handleChange={this.handleChange}
          />
        </div>
        <div className="viewDisplay">
          <Presentation
            name={this.state.name}
            lastName={this.state.lastName}
            eMail={this.state.eMail}
            phone={this.state.phone}
            university={this.state.university}
            major={this.state.major}
            year={this.state.year}
            gpa={this.state.gpa}
            company={this.state.company}
            startingDate={this.state.startingDate}
            position={this.state.position}
          />
        </div>
      </div>
    );
  }
}
export default App;
