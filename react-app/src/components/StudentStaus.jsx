import React from 'react'

function StudentStatus(Rollno,Name,Status) {
  return (
    <tr>
      <td>{Rollno}</td>
      <td>{Name}</td>
      <td>{Status}</td>
    </tr>
  )
}

export default StudentStatus