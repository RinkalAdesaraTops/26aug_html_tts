import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delFunc, insFunc } from './action/UserAction'

const ReduxCrud = () => {
    const [data,setData]=useState({
        name:"",
        age:""
    })
    const allData = useSelector((i)=>i.data)
    const dispatch = useDispatch()
    const handleChange = (e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const saveData = (e)=>{
        e.preventDefault()
        dispatch(insFunc(data))
    }
  return (
    <div>
      <form action="#" method='post' onSubmit={saveData}>
        Name: <input type="text" name="name" id="name" value={data.name} onChange={handleChange} /><br /><br />
         Age: <input type="number" name="age" id="age" value={data.age} onChange={handleChange} />
         <br /><br />
         <input type="submit" value="Save" />
      </form>
      <table>
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
                allData.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td><button onClick={()=>dispatch(delFunc(index))}>Delete</button></td>
                        </tr>
                    )
                })  
            }
        </tbody>
      </table>
    </div>
  )
}

export default ReduxCrud
