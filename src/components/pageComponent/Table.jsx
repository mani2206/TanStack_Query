import React from "react";


function Table({data,handleDelete,handleEdit}) {
  
   
  return (
    <table className="table container">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          console.log(item);
          return (
            <tr key={i}>
              <th scope="row">{item.id}</th>
              <td>{item.Name}</td>
              <td>{item.Age}</td>
              <td>
                <button className="btn btn-info me-2"  onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger"  onClick={() => handleDelete(item.id ,item.Name)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
