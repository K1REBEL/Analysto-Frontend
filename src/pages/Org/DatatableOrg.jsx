import React, { useState } from "react";
import "./DatatableOrg.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "fullName",
    headerName: "Full Name",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "action",
    headerName: "Action",
    className: "action",
    width: 200,
    renderCell: (params) => (
      <div className="action-buttons">
       
        <Button
          className="configbtn"
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: '10px' }}
        >
          Config
        </Button>
        <Button
          className="deleteButton"
          variant="contained"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </div>
    ),
  },
  ];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", email: "jon@example.com" },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "cersei@example.com",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "jaime@example.com",
  },
  { id: 4, lastName: "Stark", firstName: "Arya", email: "arya@example.com" },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "daenerys@example.com",
  },
];

function Datatable() {
  const [newUser, setNewUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  // ============Add new user==============
  const handleAddUser = () => {
    const updatedRows = [...rows, newUser];
    console.log(updatedRows);

    setNewUser({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleEdit = (id) => {
    console.log(`Edit row with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Delete row with id ${id}`);
  };

  return (
    <div className="datatable">
      <div className="dataTableAdd">
        <TextField
          name="fullName"
          label="Full Name"
          value={newUser.fullName}
          className="input"
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <TextField
          name="email"
          label="Email"
          value={newUser.email}
          className="input"
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <TextField
          name="password"
          label="Password"
          className="input"
          type="password"
          value={newUser.password}
          onChange={handleInputChange}
          variant="outlined"
          size="small"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </div>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Datatable;
