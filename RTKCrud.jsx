import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delData, insData } from './RTK/EmpReducer'

const RTKCrud = () => {
    const [data,setData] = useState({
        name:"",
        age:""
    })
    const allData = useSelector((state)=>state.Emp.data)
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
        dispatch(insData(data))
    }
  return (
    <div>
      <h3>Redux Toolkit Example</h3>
      <form action="#" method='post' onSubmit={saveData}>
        Name:
            <input type="text" name="name" id="name" onChange={handleChange} value={data.name} /><br /><br />
        Age:
            <input type="number" name="age" id="age" onChange={handleChange} value={data.age} /><br /><br />
            <input type="submit" value="Save Data" /><br /><br />
      </form>
      <table>
        <thead>
            <tr>
                <th>ID</th>
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
                            <td>
                                <button>Edit</button>
                                <button onClick={()=>dispatch(delData(index))}>Delete</button>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default RTKCrud
