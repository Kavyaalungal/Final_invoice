import React, { useState } from 'react';
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Typography,
  CircularProgress,
  Paper,
  Box
} from '@mui/material';
import { CButton, CCard, CCardHeader } from '@coreui/react';
import axios from 'axios';

const Bill = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [collectionType, setCollectionType] = useState('lab');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async () => {
    setLoading(true); // Show loading indicator
    try {
      const response = await axios.post('https://api.example.com/bill-collection', {
        fromDate,
        toDate,
        collectionType,
        paymentMethod,
      });
      // Process the response
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Bill Wise Collection</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
             
             <CButton color="primary">SAVE</CButton>
             <CButton color="primary">SAVE</CButton>
             <CButton color="primary">SAVE</CButton>
             <CButton color="primary">SAVE</CButton>
             <CButton color="primary">SAVE</CButton>
         </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
              <FormControlLabel value="lab" control={<Radio />} label="Lab Collection" />
              <FormControlLabel value="purchase" control={<Radio />} label="Purchase" />
              <FormControlLabel value="pharmacy" control={<Radio />} label="Pharmacy Collection" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <RadioGroup row value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <FormControlLabel value="cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="cheque" control={<Radio />} label="Cheque" />
              <FormControlLabel value="bhim" control={<Radio />} label="BHIM/UPI Online Payment" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="From Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            sx={{ border: '1px solid #ccc', borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Up To Date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            sx={{ border: '1px solid #ccc', borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Amount"
            sx={{ border: '1px solid #ccc', borderRadius: 1 }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            disabled={loading} // Disable button when loading
          >
            {loading ? <CircularProgress size={24} /> : 'Auto Allocate'}
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>Bill Details</Typography>
          <Box sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={2}>Slno</Grid>
              <Grid item xs={2}>Lab No</Grid>
              <Grid item xs={2}>Date</Grid>
              <Grid item xs={2}>Select</Grid>
              <Grid item xs={2}>Patient</Grid>
              <Grid item xs={2}>Amount</Grid>
              <Grid item xs={2}>Balance</Grid>
              <Grid item xs={2}>Allocated Amt</Grid>
              <Grid item xs={2}>Current Bal</Grid>
            </Grid>
            {/* Add rows dynamically as needed */}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Bill;
