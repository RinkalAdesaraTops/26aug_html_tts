import React, { useState } from "react";

const Usercrud = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]); 
  const saveData = (e) => {
    e.preventDefault()
    setData([
        ...data,
        {
            "name":name,
            "age":age,
            "salary":salary
        }
    ])
    setName('')
    setAge('')
    setSalary('')
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
        <label htmlFor="">Name:</label>
        <input
          type="number"
          name="salary"
          id="salary"
          onChange={(e) => setSalary(e.target.value)}
          value={salary}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
      <br />
      <table>
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
            {
                data.map((i,index)=>{
                    return (
                        <tr>
                            <td>{index+1}</td>
                            <td>{i.name}</td>
                            <td>{i.age}</td>
                            <td>{i.salary}</td>
                            <td>Delete</td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Usercrud;
