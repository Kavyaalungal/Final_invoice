// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Button,
//   Typography,
//   CircularProgress,
//   Paper,
//   Box,
//   Container
// } from '@mui/material';
// import { CButton, CCard, CCardHeader } from '@coreui/react';
// import axios from 'axios';

// const Bill = () => {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [collectionType, setCollectionType] = useState('lab');
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const [loading, setLoading] = useState(false);

//   const handleFormSubmit = async () => {
//     setLoading(true); // Show loading indicator
//     try {
//       const response = await axios.post('https://api.example.com/bill-collection', {
//         fromDate,
//         toDate,
//         collectionType,
//         paymentMethod,
//       });
//       // Process the response
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false); // Hide loading indicator
//     }
//   };

//   return (
//     <Container component="main" maxWidth="md" >
//       <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
//      <Box sx={{ padding: 2 }}>
//       <Grid container spacing={2} alignItems="center">
//         <Grid item xs={12} md={8}>
//           <Typography
//             variant="h6"
//             sx={{
//               margin: 0,
//               fontSize: '24px',
//               fontWeight: 'bold',
//               color: ' #599eb4 ',
//             }}
//           >
//             BILL WISE COLLECTION
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               SAVE
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               SAVE
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               SAVE
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               SAVE
//             </CButton>
//             <CButton
//               color="primary"
//               style={{
//                 width: '100%',
//                 maxWidth: { xs: '100%', sm: 'auto' },
//               }}
//             >
//               EXIT
//             </CButton>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//             <hr/>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={3}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//               <FormControlLabel value="lab" control={<Radio />} label="Lab Collection" />
//               <FormControlLabel value="purchase" control={<Radio />} label="Purchase" />
//               <FormControlLabel value="pharmacy" control={<Radio />} label="Pharmacy Collection" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>

//         <Grid item xs={12} sm={3}>
//           <FormControl component="fieldset">
//             <RadioGroup row value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//               <FormControlLabel value="cash" control={<Radio />} label="Cash" />
//               <FormControlLabel value="cheque" control={<Radio />} label="Cheque" />
//               <FormControlLabel value="bhim" control={<Radio />} label="BHIM/UPI Online Payment" />
//             </RadioGroup>
//           </FormControl>
//         </Grid>

//         {/* <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="From Date"
//             type="date"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             sx={{ border: '1px solid #ccc', borderRadius: 1 }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Up To Date"
//             type="date"
//             InputLabelProps={{
//               shrink: true,
//             }}
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             sx={{ border: '1px solid #ccc', borderRadius: 1 }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <TextField
//             fullWidth
//             label="Amount"
//             sx={{ border: '1px solid #ccc', borderRadius: 1 }}
//           />
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleFormSubmit}
//             disabled={loading} // Disable button when loading
//           >
//             {loading ? <CircularProgress size={24} /> : 'Auto Allocate'}
//           </Button>
//         </Grid> */}

//         {/* <Grid item xs={12}>
//           <Typography variant="h6" gutterBottom>Bill Details</Typography>
//           <Box sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={2}>Slno</Grid>
//               <Grid item xs={2}>Lab No</Grid>
//               <Grid item xs={2}>Date</Grid>
//               <Grid item xs={2}>Select</Grid>
//               <Grid item xs={2}>Patient</Grid>
//               <Grid item xs={2}>Amount</Grid>
//               <Grid item xs={2}>Balance</Grid>
//               <Grid item xs={2}>Allocated Amt</Grid>
//               <Grid item xs={2}>Current Bal</Grid>
//             </Grid>
            
//           </Box>
//         </Grid> */}
//       </Grid>
//       </Paper>
//       </Container>
//   );
// };

// export default Bill;
// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   FormControl,
//   FormControlLabel,
//   RadioGroup,
//   Radio,
//   Button,
//   Typography,
//   CircularProgress,
//   Paper,
//   Box,
//   Container
// } from '@mui/material';
// import { CButton } from '@coreui/react';
// import axios from 'axios';

// const Bill = () => {
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [collectionType, setCollectionType] = useState('lab');
//   const [paymentMethod, setPaymentMethod] = useState('cash');
//   const [loading, setLoading] = useState(false);

//   const handleFormSubmit = async () => {
//     setLoading(true); // Show loading indicator
//     try {
//       const response = await axios.post('https://api.example.com/bill-collection', {
//         fromDate,
//         toDate,
//         collectionType,
//         paymentMethod,
//       });
//       // Process the response
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false); // Hide loading indicator
//     }
//   };

//   return (
//     <Container component="main" maxWidth="md">
//       <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
//         <Box sx={{ padding: 2 }}>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={8}>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   margin: 0,
//                   fontSize: '24px',
//                   fontWeight: 'bold',
//                   color: ' #599eb4 ',
//                 }}
//               >
//                 BILL WISE COLLECTION
//               </Typography>
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   FETCH
//                 </CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   PRINT
//                 </CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   NEW
//                 </CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   SAVE
//                 </CButton>
//                 <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
//                   EXIT
//                 </CButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//         <hr />
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={12} md={6}>
//             <FormControl component="fieldset">
//               <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
//                 <FormControlLabel value="lab" control={<Radio />} label="Lab Collection" />
//                 <FormControlLabel value="purchase" control={<Radio />} label="Purchase" />
//                 <FormControlLabel value="pharmacy" control={<Radio />} label="Pharmacy Collection" />
//               </RadioGroup>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={12} md={6}>
//             <FormControl component="fieldset">
//               <RadioGroup row value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
//                 <FormControlLabel value="cash" control={<Radio />} label="Cash" />
//                 <FormControlLabel value="cheque" control={<Radio />} label="Cheque" />
//                 <FormControlLabel value="bhim" control={<Radio />} label="BHIM/UPI Online Payment" />
//               </RadioGroup>
//             </FormControl>
//           </Grid>

//           <Grid item xs={12} sm={6}>
//             <TextField
//               id="corporate"
//               label="Corporate"
//               variant="outlined"
//               size="small"
//               fullWidth
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//       </Grid>

         


//           <Grid item xs={12}>
//             <Typography variant="h6" gutterBottom>Bill Details</Typography>
//             <Box sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={1}>Slno</Grid>
//                 <Grid item xs={1}>Lab No</Grid>
//                 <Grid item xs={1}>Date</Grid>
//                 <Grid item xs={1}>Select</Grid>
//                 <Grid item xs={1}>Patient</Grid>
//                 <Grid item xs={1}>Amount</Grid>
//                 <Grid item xs={1}>Balance</Grid>
//                 <Grid item xs={1}>Allocated Amt</Grid>
//                 <Grid item xs={1}>Current Bal</Grid>
//               </Grid>
//             </Box>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Container>
//   );
// };

// export default Bill;

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
  Box,
  Container
} from '@mui/material';
import { CButton } from '@coreui/react';
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
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px', borderRadius: '15px' }}>
        <Box sx={{ padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h6"
                sx={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: ' #599eb4 ',
                }}
              >
                BILL WISE COLLECTION
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '16px' }}>
                <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' },backgroundColor:' #599eb4 ' }}>
                  FETCH
                </CButton>
                <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                  PRINT
                </CButton>
                <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                  NEW
                </CButton>
                <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                  SAVE
                </CButton>
                <CButton color="primary" style={{ width: '100%', maxWidth: { xs: '100%', sm: 'auto' } }}>
                  EXIT
                </CButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <hr />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={6}>
            <FormControl component="fieldset">
              <RadioGroup row value={collectionType} onChange={(e) => setCollectionType(e.target.value)}>
                <FormControlLabel
                  value="lab"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">Lab Collection</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
                <FormControlLabel
                  value="purchase"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">Purchase</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
                <FormControlLabel
                  value="pharmacy"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">Pharmacy Collection</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            <FormControl component="fieldset">
              <RadioGroup row value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <FormControlLabel
                  value="cash"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">Cash</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
                <FormControlLabel
                  value="cheque"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">Cheque</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
                <FormControlLabel
                  value="bhim"
                  control={<Radio size="small" />}
                  label={<Typography variant="body2">BHIM/UPI Online Payment</Typography>}
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 12 } }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
<Grid item xs={12} sm={6}>
    <TextField
    id='corporate'
    label='Corporate'
    variant='outlined'
    size='small'
    fullWidth
    InputLabelProps={{style:{fontSize:'16PX'}}}
    />

</Grid>
          <Grid item xs={12} md={6}>
          
          </Grid>

          <Grid item xs={12} md={3}>
          <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
              />
          </Grid>

          <Grid item xs={12} md={9}>
         
          </Grid>
          <Grid item xs={12} md={3}>
          <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
              />
          </Grid>
          <Grid item xs={12} md={3}>
          <TextField
                id="dob"
                label="Date of Birth"
                type="date"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
              />
          </Grid>

          <Grid item xs={12} md={6}>
          
          </Grid>

          {/* <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Bill Details</Typography>
            <Box sx={{ border: '1px solid #ccc', borderRadius: 1, padding: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={1}><Typography variant="body1">Slno</Typography></Grid>
                <Grid item xs={1}><Typography variant="body1">Lab No</Typography></Grid>
                <Grid item xs={1}><Typography variant="body1">Date</Typography></Grid>
                <Grid item xs={1}><Typography variant="body1">Select</Typography></Grid>
                <Grid item xs={2}><Typography variant="body1">Patient</Typography></Grid>
                <Grid item xs={1}><Typography variant="body1">Amount</Typography></Grid>
                <Grid item xs={1}><Typography variant="body1">Balance</Typography></Grid>
                <Grid item xs={2}><Typography variant="body1">Allocated Amt</Typography></Grid>
                <Grid item xs={2}><Typography variant="body1">Current Bal</Typography></Grid>
              </Grid>
     
              <Grid container spacing={2}>
                <Grid item xs={1}><Typography variant="body2">1</Typography></Grid>
                <Grid item xs={1}><Typography variant="body2">1234</Typography></Grid>
                <Grid item xs={1}><Typography variant="body2">12-07-2024</Typography></Grid>
                <Grid item xs={1}><Typography variant="body2">Yes</Typography></Grid>
                <Grid item xs={2}><Typography variant="body2">John Doe</Typography></Grid>
                <Grid item xs={1}><Typography variant="body2">$100</Typography></Grid>
                <Grid item xs={1}><Typography variant="body2">$20</Typography></Grid>
                <Grid item xs={2}><Typography variant="body2">$80</Typography></Grid>
                <Grid item xs={2}><Typography variant="body2">$0</Typography></Grid>
              </Grid>
             
            </Box>
          </Grid> */}
        </Grid>
      </Paper>
    </Container>
  );
};

export default Bill;
