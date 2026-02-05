import React, { useState } from "react";
const Empcomponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [id, setId] = useState("");
  const [alldata, setAlldata] = useState([]);
  const saveData = (e) => {
    e.preventDefault();
    if (id != "") {
      //update
      let res = alldata.map((i,index)=>{
              if(index==id){
                  i.name = name
                  i.age = age
                  i.salary = salary
              }
              return i
      })
      setAlldata(res)
    } else {
      //insert
      setAlldata([
        ...alldata,
        {
          name: name,
          age: age,
          salary: salary,
        },
      ]);
    }
    setName("");
    setAge("");
    setSalary("");
    setId('')
  };
  const delData = (id) => {
    //0 1  3 4 id=2
    let res = alldata.filter((i, index) => {
      return index != id;
    });
    setAlldata(res);
  };
  const editData = (id) => {
    let res = alldata.find((i, index) => index == id);
    setName(res.name);
    setAge(res.age);
    setSalary(res.salary);
    setId(id);
  };
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="">Salary:</label>
        <input
          type="number"
          name="salary"
          value={salary}
          id="salary"
          onChange={(e) => setSalary(e.target.value)}
        />
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
  );
};

export default Empcomponent;
