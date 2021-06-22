import React from 'react'

class Education extends React.Component {
  constructor() {
    super()
    this.state = {
      university: '',
      major: '',
      year: '',
      gpa: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, type } = event.target
    this.setState({ [name]: event.target.value })
    console.log(this.state)
  }
  render() {
    return (
      <div className="container">
        <h1>Education</h1>
        <form>
          <input
            type="text"
            name="university"
            placeholder="University"
            value={this.state.university}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={this.state.major}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="year"
            placeholder="Year"
            value={this.state.year}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="gpa"
            placeholder="GPA"
            value={this.state.gpa}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Education
