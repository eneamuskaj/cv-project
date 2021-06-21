import React from "react";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import PracticalExperience from "./components/Practical Experience";

class App extends React.Component {
  render() {
    return (
      <div>
        <GeneralInfo />
        <Education />
        <PracticalExperience />
      </div>
    );
  }
}
export default App;
