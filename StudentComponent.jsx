import React, { useState } from "react";
import { Outlet } from "react-router";

const StudentComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    salary: "",
  });
  const [id,setId] = useState('')
  const [alldata, setAlldata] = useState([]);
  const handleChange = (e) => {
    // const n = e.target.name
    // const v = e.target.value
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = (e) => {
    e.preventDefault();
    if(id!=''){
        let res = alldata.map((i,index)=>{
            if(index==id){
                // return data
                i=data
            }
            return i
        })
        setAlldata(res)
    } else {
        setAlldata([...alldata, data]);
    }
    setData({
      name: "",
      age: "",
      salary: "",
    });
    setId('')
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setData(res)
    setId(id);
  };
  const delData = (id) => {
    let res = alldata.filter((i, index) => {
      return index != id;
    });
    setAlldata(res);
  };
  return (
    <>
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:{" "}
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />{" "}
        <br />
        <br />
        Age:{" "}
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />{" "}
        <br />
        <br />
        Salary:{" "}
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={handleChange}
          value={data.salary}
        />{" "}
        <br />
        <br />
        <input type="submit" value="Save" />
      </form>
      <br />
      <br />
      <table border={"1"}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.salary}</td>
                <td>
                  <button onClick={() => editData(index)}>Edit</button>
                  <button onClick={() => delData(index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <Outlet />
    </>
  );
};

export default StudentComponent;
