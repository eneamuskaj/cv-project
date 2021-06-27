import React, { useState } from 'react'
import Education from './components/Education'
import GeneralInfo from './components/GeneralInfo'
import PracticalExperience from './components/Practical Experience'
import Presentation from './components/Presentation'

const App = () => {
  const [name, setname] = useState('')
  const [lastName, setlastName] = useState('')
  const [eMail, seteMail] = useState('')
  const [phone, setphone] = useState('')
  const [university, setuniversity] = useState('')
  const [major, setmajor] = useState('')
  const [year, setyear] = useState('')
  const [gpa, setgpa] = useState('')
  const [company, setcompany] = useState('')
  const [startingDate, setstartingDate] = useState('')
  const [position, setposition] = useState('')

  const handleChange = (event) => {
    const { name } = event.target
    var eventName = 'set' + name
    eval(eventName)(event.target.value)
  }
  return (
    <div className="mainDisplay">
      <div className="inputDisplay">
        <GeneralInfo
          name={name}
          lastName={lastName}
          eMail={eMail}
          phone={phone}
          handleChange={handleChange}
        />
        <Education
          university={university}
          major={major}
          year={year}
          gpa={gpa}
          handleChange={handleChange}
        />
        <PracticalExperience
          company={company}
          startingDate={startingDate}
          position={position}
          handleChange={handleChange}
        />
      </div>
      <div className="viewDisplay">
        <Presentation
          name={name}
          lastName={lastName}
          eMail={eMail}
          phone={phone}
          university={university}
          major={major}
          year={year}
          gpa={gpa}
          company={company}
          startingDate={startingDate}
          position={position}
        />
      </div>
    </div>
  )
}

export default App
