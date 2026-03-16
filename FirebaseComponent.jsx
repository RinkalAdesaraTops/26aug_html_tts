import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { addDoc, collection,query,onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
const FirebaseComponent = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
  });
  const [alldata, setAlldata] = useState([]);
  const [id, setId] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const saveData = async (e) => {
    e.preventDefault();
    if(id!='')
      await updateDoc(doc(db,"userinfo",id),data)
    else 
      await addDoc(collection(db, "userinfo"), data);
    setData({
      name: "",
      age: "",
    });
    setId('')
  };
  const delData = async(id)=>{
      await deleteDoc(doc(db,"userinfo",id))
  }
  const editData = async(id)=>{
      let userdata = await getDoc(doc(db,"userinfo",id))
      setData(userdata.data())
      setId(id)
  }
  useEffect(() => {
    const q = query(collection(db, "userinfo"));
    onSnapshot(q, (i) => {
      setAlldata(
        i.docs.map((doc) => ({
          id: doc.id,
           ...doc.data(),
        })),
      );
    });
  }, []);
  return (
    <div>
      <form action="#" method="post" onSubmit={saveData}>
        Name:{" "}
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={data.name}
        />
        <br />
        <br />
        Age:{" "}
        <input
          type="number"
          name="age"
          id="age"
          onChange={handleChange}
          value={data.age}
        />
        <br />
        <br />
        <input type="submit" value="Save Data" />
        <br />
        <br />
      </form>
      <table border={'2'} width={'400px'}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((i, index) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={()=>editData(i.id)}>Edit</button>
                  <button onClick={()=>delData(i.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FirebaseComponent;
