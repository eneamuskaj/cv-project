import React from 'react'

const Presentation = (props) => {
  const printContent = () => {
    var printcontent = document.getElementById('div1').innerHTML
    document.body.innerHTML = printcontent
    window.print()
  }
  return (
    <div>
      <div id="div1">
        <h1>
          {props.name} {props.lastName}
        </h1>
        <p>E-mail: {props.eMail}</p>
        <p>Phone: {props.phone}</p>
        <h3>University: {props.university}</h3>
        <p>Major: {props.major}</p>
        <p>Year of Graduation: {props.year}</p>
        <p>GPA: {props.gpa}</p>
        <h3>Current employer: {props.company}</h3>
        <h4>Starting date: {props.startingDate}</h4>
        <p>Position: {props.position}</p>
      </div>
      <div>
        <button onClick={printContent}>Print Content</button>
      </div>
    </div>
  )
}

export default Presentation
