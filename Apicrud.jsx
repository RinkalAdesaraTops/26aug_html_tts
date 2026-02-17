import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Apicrud = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const [id,setId] = useState("")
    const [alldata,setAlldata] = useState([])
    const disp = ()=>{
        axios.get("http://localhost:3000/users")
            .then((res)=>setAlldata(res.data))
    }
    useEffect(()=>{
            disp()
    },[])
    const saveData = (e)=>{
        e.preventDefault()
        if(id!=''){
            axios.put("http://localhost:3000/users/"+id,data)
            .then(()=>console.log("data updated.."))

        } else {
            axios.post("http://localhost:3000/users",data)
            .then(()=>console.log("data inserted.."))
        }
        disp()
        setId("")
        setData({
            name:"",
            age:""
        })
    }
    const handleChange = (e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const editData = (id)=>{
            axios.patch("http://localhost:3000/users/"+id)
            .then((res)=>setData(res.data))
            setId(id)
    }
    const delData = (id)=>{
        axios.delete("http://localhost:3000/users/"+id)
            .then(()=>console.log("data deleted"))
        disp()
    }
  return (
    <>
    <form action="#" method="post" onSubmit={saveData}>
        Name:
        <input type="text" name="name" id="name" onChange={handleChange} value={data.name}/><br /><br />
        Age:
        <input type="number" name="age" id="age" onChange={handleChange} value={data.age}/><br /><br />
        <input type="submit" value="Save data" /><br /><br />
    </form>
    <table border={'2'} cellSpacing={'0'}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                alldata.map((i,index)=>{
                    return(
                        <tr>
                            <td>{i.id}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>
                                <button onClick={()=>editData(i.id)}>Edit</button>
                                <button onClick={()=>delData(i.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}
export default Apicrud
