import React, { useState } from "react";

const Firstcomponent = ({ myname }) => {
  const [age, setAge] = useState(25);
  const changeAge = () => {
    setAge(55);
  };
  return (
    <div>
      <h3>Component1 called...</h3>
      <h5>My Name is -- {myname}</h5>
      <h5>My age is -- {age}</h5>
      {/* <button onClick={()=>setAge(55)}>Add</button> */}
      <button onClick={changeAge}>Add</button>
    </div>
  );
};
export default Firstcomponent;
