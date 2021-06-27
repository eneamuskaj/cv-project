import React from 'react'

const GeneralInfo = (props) => {
  return (
    <div className="container">
      <h3>General Info</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          onChange={props.handleChange}
          value={props.name}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={props.handleChange}
          value={props.lastName}
        />
        <br />
        <input
          type="text"
          name="eMail"
          placeholder="E Mail"
          onChange={props.handleChange}
          value={props.eMail}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={props.handleChange}
          value={props.phone}
        />
      </form>
    </div>
  )
}


export default GeneralInfo
