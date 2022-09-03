import React, { createContext, useState } from 'react'

export const store = createContext()
const Details = (props) => {
    const [students, setStudents] = useState([
        {
            "Name":"Preeti",
            "Age" : "22",
            "Course" : "Full Stack Web Developer",
            "Batch" : 'March',
            "id" : "1"
        },
        {
            "Name":"Preeti",
            "Age" : "22",
            "Course" : "Full Stack Web Developer",
            "Batch" : 'March',
            "id" : "2"
        },
        {
            "Name":"Preeti",
            "Age" : "22",
            "Course" : "Full Stack Web Developer",
            "Batch" : 'March',
            "id" : "3"
        },
        {
            "Name":"Preeti",
            "Age" : "22",
            "Course" : "Full Stack Web Developer",
            "Batch" : 'March',
            "id" : "4"
        },
        {
            "Name":"Preeti",
            "Age" : "22",
            "Course" : "Full Stack Web Developer",
            "Batch" : 'March',
            "id" : "5"
        },
    ])
  return (
    <div>
        <store.Provider value={[students,setStudents]} >
             {props.children}
        </store.Provider>
    </div>
  )
}

export default Details
