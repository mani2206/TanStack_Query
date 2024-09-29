import React from "react";
import { useRef, useState } from "react";
import Table from "./Table";
import data from "../../data/data.json";
import Dialog from "./Dialog";

export default function Login() {
  const [datas, setDatas] = useState(data);
  // console.log(datas,"name---");
  const [editing, setEditing] = useState(null);
  const [dialog, setDailog] = useState({
    isLoading: false,
    message: "",
    idToDelete: null,
    subHeader: "",
  });

  const nameRef = useRef();
  const ageRef = useRef();
  const dialogRef = useRef();
  const [errorName, setErrorName] = useState(null);
  const [errorAge, setErrorAge] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;

    if (name && age) {
      console.log(`Name:${name}, Age:${age}`);

      if (editing) {
        setDatas(
          datas.map((item) =>
            item.id === editing.id ? { ...item, Name: name, Age: age } : item
          )
        );
        setEditing(null);
      } else {
        const newId = datas.length ? datas[datas.length - 1].id + 1 : 1;
        setDatas([...datas, { id: newId, Name: name, Age: age }]);
        console.log("Data not added to the table as per requirement");
      }

      nameRef.current.value = "";
      ageRef.current.value = "";
      setErrorName(null);
      setErrorAge(null);
    } else {
      if (!name) {
        setErrorName("Please enter your name");
      } else {
        setErrorName(null);
      }

      if (!age) {
        setErrorAge("Please enter your age");
      } else {
        setErrorAge(null);
      }
    }
  };

  const handleDelete = (id, name) => {
    setDailog({
      isLoading: true,
      message: `Are you sure you want to delete ${name}?`,
      subHeader: `To confirm, type ${name} in the box below`,
      idToDelete: id,
    });
  };

  const confirmDelete = (confirm) => {
    if (confirm) {
      const dialogInput = dialogRef.current.value;
      // console.log(dialogInput);
      const dataDialog = datas.find(
        (item) => item.id === dialog.idToDelete
      ).Name;
      if (dialogInput === dataDialog) {
        setDatas(datas.filter((item) => item.id !== dialog.idToDelete));
      }
      else{
        console.log("check the name");
      }
    }
    setDailog({
      isLoading: false,
      message: "",
      subHeader: "",
      idToDelete: null,
    });
  };

  const handleEdit = (item) => {
    nameRef.current.value = item.Name;
    ageRef.current.value = item.Age;
    setEditing(item);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="container pt-4">
        <div className="d-flex justify-content-center">
          <label className="pe-3">
            Name <sup className="text-danger">*</sup>:
          </label>
          <input
            placeholder="Enter ur Name"
            inputMode="text"
            id="nameRef"
            ref={nameRef}
          />
        </div>
        {errorName && (
          <p className="text-danger d-flex justify-content-center m-0">
            {errorName}
          </p>
        )}
        <div className="d-flex justify-content-center py-3">
          <label className="pe-3">
            Age <sup className="text-danger pe-3">*</sup>:
          </label>
          <input
            placeholder="Enter ur age"
            inputMode="number"
            id="ageRef"
            ref={ageRef}
          />
        </div>
        {errorAge && (
          <p className="text-danger d-flex justify-content-center m-0">
            {errorAge}
          </p>
        )}
        <div className="d-flex justify-content-center">
          <button className="btn btn-info" type="submit">
            {editing ? "Edit Student" : "Add Student"}
          </button>
        </div>
      </form>
      <Table data={datas} handleDelete={handleDelete} handleEdit={handleEdit} />
      {dialog.isLoading && (
        <Dialog
          message={dialog.message}
          subHeader={dialog.subHeader}
          onConfirm={confirmDelete}
          dialogRef={dialogRef}
        />
      )}
    </>
  );
}
