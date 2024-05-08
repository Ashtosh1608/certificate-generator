import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CertificatePage from '../certificatePage/CertificatePage';
// import {useH}

const User = () => {
    // let name;
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [date, setDate] = useState("")


    function funcSubmit(e){
        e.preventDefault();

        // console.log(`name is : ${name}`)
        // console.log(`course is : ${course}`)
        // console.log(`date is : ${date}`)

        navigate("/certi")


    }
  return (
    <>
    
        <input type="text"  placeholder='Your name' value = {name} onChange={(e)=>setName(e.target.value)} />
        <input type="text"  placeholder='course name' value = {course} onChange={(e)=>setCourse(e.target.value)} />
        <input type="text"  placeholder='completion date' value = {date} onChange={(e)=>setDate(e.target.value)} />
        {/* <input type="text"  placeholder='Your name' /> */}

        <CertificatePage name = {name} course = {course} date = {date}/>

        <button onClick={funcSubmit}>submit</button>

    </>
  )
}

export default User