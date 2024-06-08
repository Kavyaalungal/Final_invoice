import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Box, Typography } from '@mui/material';
import Edit from './Edit';
import Navbar from './Navbar';

function ParentComponent() {
  const [invoiceData, setInvoiceData] = useState(null);
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [error, setError] = useState(null);
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.16.16.10:8082/api/EditInvoice', {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      setInvoiceData(response.data.invoiceDtls);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSave = () => {
    if (!isDataUpdated) return;

    axios.post('http://172.16.16.10:8082/api/EditInvSave', invoiceData)
      .then(response => {
        console.log('Data saved successfully:', response.data);
        setInvoiceData(invoiceData); // Update the state with the saved data
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  const handleChange = (updatedData) => {
    setInvoiceData(updatedData);
    setIsDataUpdated(true);
  };

  return (
    <div>
      <Navbar />
      <Box className="edit-invoice-container">
      <Navbar />
      <Box className="navbar">
        <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
        <Box className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button" >NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button" onClick={saveDataToAPI} disabled={!isDataUpdated}>SAVE</Button>
          <Button variant="contained" color="default" className="navbar-button">EXIT</Button>
        </Box>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={fetchData}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      {invoiceData && (
        <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(true); // Reset email validation on change
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                error={!isEmailValid} // Apply error style if email is invalid
                helperText={!isEmailValid ? "Invalid email address" : ""} // Display error message
              />
            </Grid>
            {/* Add more fields for other data */}
          </Grid>
        </Box>
      )}
    </Box>
    </div>
  );
}

export default ParentComponent;
