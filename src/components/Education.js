import React from 'react'

const Education = (props) => {
  return (
    <div className="container">
      <h3>Education</h3>
      <form>
        <input
          type="text"
          name="university"
          placeholder="University"
          value={props.university}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={props.major}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={props.year}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          name="gpa"
          placeholder="GPA"
          value={props.gpa}
          onChange={props.handleChange}
        />
      </form>
    </div>
  )
}

export default Education
