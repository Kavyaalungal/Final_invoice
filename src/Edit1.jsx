import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Autocomplete,
} from '@mui/material';
import './styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Edit1 = () => {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  // Add other state variables here...

  const [error, setError] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  // Add other state variables here...

  const fetchData = () => {
    // Implement your fetch data logic here...
  };

  const saveDataToAPI = () => {
    // Implement your save data logic here...
  };

  return (
    <div className="edit-invoice-container">
      <Navbar />

      <div className="navbar">
        <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
        <div className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button" >NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button" >SAVE</Button>
          <Button variant="contained" color="default" className="navbar-button">EXIT</Button>
        </div>
      </div>

      <div className="fieldset">
        <div className="form-group">
          <TextField
            id="labNo"
            label="Lab No"
            variant="outlined"
            size="small"
            fullWidth
            value={labNo}
            onChange={(e) => setLabNo(e.target.value)}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </div>

        <div className="form-group">
          <TextField
            id="branchId"
            label="Branch Id"
            variant="outlined"
            size="small"
            fullWidth
            value={branchId}
            onChange={(e) => setBranchId(e.target.value)}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </div>

        <div className="form-group">
          <TextField
            id="yearId"
            label="Year Id"
            variant="outlined"
            size="small"
            fullWidth
            value={yearId}
            onChange={(e) => setYearId(e.target.value)}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        </div>

        <div className="form-group">
          <Button variant="contained" color="primary" onClick={fetchData}>
            Search
          </Button>
        </div>
      </div>

      {error && <Typography variant="body2" color="error">{error}</Typography>}

      {invoiceData && (
        <div className="fieldset">
          <div className="form-group">
            <TextField
              id="labNo"
              label="Lab No"
              variant="outlined"
              size="small"
              fullWidth
              value={labNo}
              onChange={(e) => setLabNo(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </div>

          {/* Add other form fields similarly */}
        </div>
      )}

      {/* Add other fieldsets and form groups as needed */}

      <ToastContainer />
    </div>
  );
};

export default Edit1;
