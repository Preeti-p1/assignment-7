import React, { createContext, useState } from 'react'

export const store = createContext()
const Details = (props) => {
    const [students, setStudents] = useState([
        {
            "Name":"Rupam",
            "Age" : "25",
            "Course" : "FullStack",
            "Batch" : 'feb',
            "id" : "1"
        },
        {
            "Name":"Rupam",
            "Age" : "25",
            "Course" : "FullStack",
            "Batch" : 'feb',
            "id" : "2"
        },
        {
            "Name":"Rupam",
            "Age" : "25",
            "Course" : "FullStack",
            "Batch" : 'feb',
            "id" : "3"
        },
        {
            "Name":"Rupam",
            "Age" : "25",
            "Course" : "FullStack",
            "Batch" : 'feb',
            "id" : "4"
        },
        {
            "Name":"Rupam",
            "Age" : "25",
            "Course" : "FullStack",
            "Batch" : 'feb',
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