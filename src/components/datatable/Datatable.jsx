import "./Datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 130 },
  
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    className:'action',
    width: 100,
    renderCell: (params) => (
      <Button
      className="deleteButton"
        variant="contained"
        color="error"
        size="small"
        onClick={() => handleDelete(params.row.id)}
      >
        Delete
      </Button>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'jon@example.com' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'cersei@example.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'jaime@example.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'arya@example.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'daenerys@example.com' },
];


const handleDelete = (id) => {
  console.log(`Delete row with id ${id}`);
};

function Datatable() {
  const handleDelete = (id) => {
    // Implement delete logic here
    console.log(`Delete row with id ${id}`);
  };

  return (
    <div className="datatable">
      <div className="dataTableAdd">
        Add New User
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
