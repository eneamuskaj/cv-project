import React from "react";

class Presentation extends React.Component {
  printContent() {
    var printcontent = document.getElementById("div1").innerHTML;
    document.body.innerHTML = printcontent;
    window.print();
  }
  render(props) {
    return (
      <div>
        <div id="div1">
          <h1>
            {this.props.name} {this.props.lastName}
          </h1>
          <p>E-mail: {this.props.eMail}</p>
          <p>Phone: {this.props.phone}</p>
          <h3>University: {this.props.university}</h3>
          <p>Major: {this.props.major}</p>
          <p>Year of Graduation: {this.props.year}</p>
          <p>GPA: {this.props.gpa}</p>
          <h3>Current employer: {this.props.company}</h3>
          <h4>Starting date: {this.props.startingDate}</h4>
          <p>Position: {this.props.position}</p>
        </div>
        <div>
          <button onClick={this.printContent}>Print Content</button>
        </div>
      </div>
    );
  }
}

export default Presentation;
