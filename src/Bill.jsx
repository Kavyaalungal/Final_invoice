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
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
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

  const rows = [
    { id: 1, col1: 'Data 1', col2: 'Data 2', col3: 'Data 3', col4: 'Data 4', col5: 'Data 5', col6: 'Data 6', col7: 'Data 7' },
    { id: 2, col1: 'Data 8', col2: 'Data 9', col3: 'Data 10', col4: 'Data 11', col5: 'Data 12', col6: 'Data 13', col7: 'Data 14' },
    { id: 3, col1: 'Data 15', col2: 'Data 16', col3: 'Data 17', col4: 'Data 18', col5: 'Data 19', col6: 'Data 20', col7: 'Data 21' },
    { id: 4, col1: 'Data 22', col2: 'Data 23', col3: 'Data 24', col4: 'Data 25', col5: 'Data 26', col6: 'Data 27', col7: 'Data 28' }
  ];

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
          <Grid item xs={12}>
                  <TableContainer style={{ maxHeight: 'calc(100vh - 400px)', overflowY:'auto' }}>
                    <Table stickyHeader aria-label="sticky table">
                      <TableHead>
                        <TableRow>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>SlNo</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Lab</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Date</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Select</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Patient</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Amount</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Balance</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Allocated.Amt</TableCell>
                          <TableCell sx={{ border: '1px solid #dddddd', background: '#f2f2f2', fontSize: '12px', padding: '8px' }}>Current.Bal</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                           <TableRow key={row.id}> 
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.id}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col1}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col2}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col3}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col4}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col5}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col6}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
                            <TableCell sx={{ border: '1px solid #dddddd', fontSize: '12px', padding: '8px' }}>{row.col7}</TableCell>
                            </TableRow> 
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>       
        </Grid>
      </Paper>
    </Container>
  );
};

export default Bill;
