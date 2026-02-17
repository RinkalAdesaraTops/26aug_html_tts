import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apiexample = () => {
    const [userdata,setUserdata] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>setUserdata(res.data))
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => setUserdata(json))
    },[])
  return (
    <div>
      <table border={'2'}>
        <caption>User Information</caption>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {
            userdata.map((i,index)=>{
                return(
                    <tr key={index}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                    </tr>
                )
            })
        }
      </table>
    </div>
  )
}

export default Apiexample
