import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography } from '@mui/material';
import Navbar from './Navbar';

function Edit() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation
  const [isPhone1Valid, setIsPhone1Valid] = useState(true);
  const [isPhone2Valid, setIsPhone2Valid] = useState(true);

  useEffect(() => {
    setIsDataUpdated(name !== (invoiceData?.Inv_name || '') || email !== (invoiceData?.Inv_Email || '') || phone1 !== (invoiceData?.Inv_phno || '') || phone2 !== (invoiceData?.Inv_Mob || ''));
  }, [name, email,phone1,phone2, invoiceData]);

  // Function to validate email using regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      setInvoiceData(response.data.invoiceDtls);
      setName(response.data.invoiceDtls.Inv_name || '');
      setEmail(response.data.invoiceDtls.Inv_Email || '');
      setPhone1(response.data.invoiceDtls.Inv_phno || '');
      setPhone2(response.data.invoiceDtls.Inv_Mob || '');
    } catch (error) {
      setError(error.message);
    }
  };

  const saveDataToAPI = () => {
    // Check if email is filled and validate email format
    if (email && !validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

     // Check if phone1 is filled and validate phone number format
  if (phone1 && !validatePhone(phone1)) {
    setIsPhone1Valid(false);
    return;
  }

  // Check if phone2 is filled and validate phone number format
  if (phone2 && !validatePhone(phone2)) {
    setIsPhone2Valid(false);
    return;
  }

    axios.post('http://172.16.16.10:8082/api/EditInvSave', {
      ...invoiceData,
      Inv_name: name,
      Inv_Email: email,
      Inv_phno: phone1,
      Inv_Mob : phone2,
    })
      .then(response => {
        console.log('Data saved successfully:', response.data);
        console.log('Updated Name:', name);
        console.log('Updated Email:', email);
        console.log('Updated phone1:', phone1);
        console.log('Updated phone1:', phone2);
        
      })
      .catch(error => {
        console.error('Error saving data:', error);
      });
  };

  return (
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone1"
                label="Phone1"
                variant="outlined"
                size="small"
                fullWidth
                value={phone1}
                onChange={(e) => {setPhone1(e.target.value)
                    setIsPhone1Valid(true)
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                error={!isPhone1Valid} // Apply error style if email is invalid
                helperText={!isPhone1Valid ? "Invalid Phone number" : ""} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone2"
                label="Phone2"
                variant="outlined"
                size="small"
                fullWidth
                value={phone2}
                onChange={(e) => {setPhone2(e.target.value)
                    setIsPhone2Valid(true)
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                error={!isPhone2Valid} // Apply error style if email is invalid
                helperText={!isPhone2Valid ? "Invalid Phone number" : ""} 
              />
            </Grid>
          
            {/* Add more fields for other data */}
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export default Edit;
