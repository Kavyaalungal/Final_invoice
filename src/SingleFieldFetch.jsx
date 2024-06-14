// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { TextField, Box, Typography, Grid, Button } from '@mui/material';
// import Navbar from './Navbar';

// function SingleFetchField() {
//   const [labNo, setLabNo] = useState('');
//   const [branchId, setBranchId] = useState('');
//   const [yearId, setYearId] = useState('');
//   const [invoiceData, setInvoiceData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (!labNo || !yearId || !branchId) {
//         console.error('Missing parameters:', { labNo, yearId, branchId });
//         return;
//       }
      
//       try {
//         console.log('Fetching data with params:', { labNo, yearId, branchId });
//         const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
//           params: {
//             LabNo: labNo,
//             YearId: yearId,
//             BranchId: branchId,
//           },
//         });
//         setInvoiceData(response.data.invoiceDtls);
//         console.log('Invoice Data:', response.data.invoiceDtls);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setError(error.message);
//       }
//     };

//     fetchData();
//   }, [labNo, yearId, branchId]);

//   const handleLabNoChange = (e) => {
//     setLabNo(e.target.value);
//   };

//   const handleBranchIdChange = (e) => {
//     setBranchId(e.target.value);
//   };

//   const handleYearIdChange = (e) => {
//     setYearId(e.target.value);
//   };

//   return (
//     <Box className="edit-invoice-container">
//       <Navbar />
//       <Box className="navbar">
//         <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
//         <Box className="navbar-buttons">
//           <Button variant="contained" color="primary" className="navbar-button">NEW</Button>
//           <Button variant="contained" color="secondary" className="navbar-button">SAVE</Button>
//           <Button variant="contained" color="default" className="navbar-button">EXIT</Button>
//         </Box>
//       </Box>
//       <Box className="fieldset">
//         <Grid container spacing={3} alignItems="center">
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="labNo"
//               label="Lab No"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={labNo}
//               onChange={handleLabNoChange}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="branchId"
//               label="Branch Id"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={branchId}
//               onChange={handleBranchIdChange}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="yearId"
//               label="Year Id"
//               variant="outlined"
//               size="small"
//               fullWidth
//               value={yearId}
//               onChange={handleYearIdChange}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//       {error && <Typography variant="body2" color="error">{error}</Typography>}
//       {invoiceData && (
//         <TextField
//           id="Inv_No"
//           label="Invoice Number"
//           variant="outlined"
//           size="small"
//           fullWidth
//           value={invoiceData.Inv_No || ''}
//           margin="normal"
//           disabled
//         />
//       )}
//     </Box>
//   );
// }

// export default SingleFetchField;
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Box, Typography, Grid, Button } from '@mui/material';
import Navbar from './Navbar';

function SingleFetchField() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      console.log('Fetching data with params:', { labNo, yearId, branchId });
      const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      setInvoiceData(response.data.invoiceDtls);
      console.log('Invoice Data:', response.data.invoiceDtls);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleLabNoChange = (e) => {
    setLabNo(e.target.value);
  };

  const handleBranchIdChange = (e) => {
    setBranchId(e.target.value);
  };

  const handleYearIdChange = (e) => {
    setYearId(e.target.value);
  };

  return (
    <Box className="edit-invoice-container">
      <Navbar />
      <Box className="navbar">
        <Typography variant="h4" className="navbar-heading">Edit Invoice</Typography>
        <Box className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button">NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button">SAVE</Button>
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
              onChange={handleLabNoChange}
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
              onChange={handleBranchIdChange}
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
              onChange={handleYearIdChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" onClick={fetchData}>
              Fetch Data
            </Button>
          </Grid>
        </Grid>
      </Box>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      {invoiceData && (
        <TextField
          id="Inv_name"
          label=""
          variant="outlined"
          size="small"
          fullWidth
          value={invoiceData.Inv_name || ''}
          margin="normal"
          disabled
        />
      )}
    </Box>
  );
}

export default SingleFetchField;
