import React from 'react'

const PracticalExperience = (props) => {
  return (
    <div className="container">
      <h3>Practical Experience</h3>
      <form>
        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={props.handleChange}
          value={props.company}
        />
        <br />
        <input
          type="text"
          name="startingDate"
          placeholder="Starting Date"
          onChange={props.handleChange}
          value={props.startingDate}
        />
        <br />
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={props.handleChange}
          value={props.position}
        />
        <br />
      </form>
    </div>
  )
}

export default PracticalExperience
