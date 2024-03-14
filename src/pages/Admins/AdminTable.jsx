import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(OrgName, Nish, Configuration) {
  return {
    OrgName,
    Nish,
    Configuration,
    history: [
      {
        Reigion: '2020-01-05',
        ContactForm: '11091700',
        SubscriptionAbout: 3,
      },
      {
        Reigion: '2020-01-05',
        ContactForm: '11091700',
        SubscriptionAbout: 3,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {row.OrgName}
      </TableCell>
      <TableCell align="right">{row.Nish}</TableCell>
      <TableCell align="right">
        <Button variant="contained" color="primary" size="small" onClick={() => console.log('Delete clicked')}>
          Delete
        </Button>
        <Button variant="contained" color="secondary" size="small" onClick={() => console.log('Freeze clicked')}>
          Freeze
        </Button>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Description
            </Typography>
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Reigion</TableCell>
                  <TableCell>Contact Form</TableCell>
                  <TableCell align="right">Subscription About</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.history.map((historyRow, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>
                    <TableCell>{historyRow.customerId}</TableCell>
                    <TableCell align="right">{historyRow.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Electrozone','Appliances', 'Some Configuration'),
  createData('Electrozone','Appliances', 'Some Configuration'),
  createData('Electrozone','Appliances', 'Some Configuration'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} style={{ width: '100%' }}>
    <Table aria-label="collapsible table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">OrgName</TableCell>
            <TableCell align="right">Nish</TableCell>
            <TableCell align="right">Config</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
