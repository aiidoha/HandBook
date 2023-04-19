import React from "react";
import "../components/general.css";
const Section = ({ users }) => {
  return (
    <div className="table">
      <div className="tableTitle">
        <tr>
          <th>Name</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>ID</th>
        </tr>
      </div>
      <div className="tableInfo">
        {users.map((elem) => (
          <tr key={elem.id}>
            <td>{elem.name}</td>
            <td>{elem.lastName}</td>
            <td>{elem.age}</td>
            <td>{elem.id}</td> 
          </tr>
        ))}
      </div>
    </div>
  );
};

export default Section;
