import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Box, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Autocomplete } from '@mui/material';
import Navbar from './Navbar';
import { CButton, CCard, CCardHeader } from '@coreui/react';

function Cancel() {
  return (
    <Box className="edit-invoice-container" style={{borderColor:'#5b5c5b'}}>
      {/* <Navbar /> */}
      <Box className="navbar">
        <Typography variant="h4" className="navbar-heading">Cancel Invoice</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
             
        <CButton
        color="primary"
        style={{
          backgroundColor: ' #8dbfe8',
          //  borderColor: ' #35393d ',
          color: '#fff',
          padding:'10px',
          // borderRadius:'10px'
        }}
        // onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        // onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        SAVE
      </CButton>
      <CButton
        color="primary"
        style={{
          backgroundColor: '#198c20',
          color: '#fff',
          padding:'10px',
          // borderRadius:'10px'
        }}
        // onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
        // onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
      >
        EXIT
      </CButton>
         </Box>
        {/* <Box className="navbar-buttons">
          <Button variant="contained" color="primary" className="navbar-button">NEW</Button>
          <Button variant="contained" color="secondary" className="navbar-button">SAVE</Button>
          <Button variant="contained" color="default" className="navbar-button">EXIT</Button>
        </Box> */}
      </Box>
    
      
        <Box className="fieldset" style={{borderColor:'  #cdd3ce  '}}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                id="labNo"
                label="Lab No"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
      id="invDateTime"
      label="Date"
      variant="outlined"
      size="small"
      fullWidth
      type="datetime-local"
      InputLabelProps={{ shrink: true }}
      style={{ marginTop: '10px' }}
    />
  {/* <FormControl variant="outlined" size="small" fullWidth>
    <InputLabel id="dateTimeLabel">Date/Time</InputLabel>
    <Select
      labelId="dateTimeLabel"
      id="dateTime"
      label="Date/Time"
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value>
      </MenuItem>
    </Select>
  </FormControl> */}
</Grid>
</Grid>
</Box>
    
    
        <Box className="fieldset" style={{borderColor:'#cdd3ce'}}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel id="prefixLabel">Prefix</InputLabel>
                <Select
                  labelId="prefixLabel"
                  id="prefix"
                  label="Prefix"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value>
      </MenuItem>
                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={1}>
    <Typography variant="body1" gutterBottom>
      Age
    </Typography>
  </Grid>
  <Grid item container xs={12} sm={7} spacing={1}>
    <Grid item xs={3}>
      <TextField
        id="dd"
        label="Day"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="mm"
        label="Month"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={3}>
      <TextField
        id="yyyy"
        label="Year"
        variant="outlined"
        size="small"
        fullWidth
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel">Gender</InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                label="Gender"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value></MenuItem>
              </Select>
            </FormControl>
          
          </Grid>
         
  </Grid>
  {/* <Grid item xs={12} sm={4}>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
            />
          </Grid> */}
          <Grid item xs={12} sm={4}>
            <TextField
              id="phone1"
              label="Phone Number 1"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={4}>
            <TextField
              id="phone2"
              label="Phone Number 2"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid> */}
          <Grid item xs={12} sm={12}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <TextField
              id="nationality"
              label="Nationality"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={12}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid> */}
          </Grid>
        </Box>
      
    
          <Box className="fieldset"  style={{borderColor:' #9c9e9c '}}>
          <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={12}>
            <TextField
              id="refBy"
              label="Ref By"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
      </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outdr"
                label="Out Dr"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>

            <TextField
              id="branch"
              label="Branch"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
      </Grid>

            

            
            <Grid item xs={12} sm={6}>
              <TextField
                id="ipopno"
                label="IP/OP NO"
                variant="outlined"
                size="small"
                fullWidth
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="collMode"
              label="CollMode"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          
      </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
              id="collBy"
              label="Coll By"
              variant="outlined"
              size="small"
              fullWidth
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
      </Grid>
          </Grid>
        </Box>
      
      
      <Box className="fieldset"  style={{borderColor:' #9c9e9c '}}>
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="dateTimeLabel">Sample On</InputLabel>
            <Select
              labelId="sampleon"
              id="sampleon"
              label="Sample On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value>
      </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="dateTimeLabel">Report On</InputLabel>
            <Select
              labelId="reporton"
              id="reporton"
              
              label="Report On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value>
      </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
  <FormControl component="fieldset" fullWidth>
    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox  name="personally" />}
        label="Personally"
      />
      <FormControlLabel
        control={<Checkbox  name="courier" />}
        label="Courier"
      />
      <FormControlLabel
        control={<Checkbox  name="phone" />}
        label="Phone"
      />
      <FormControlLabel
        control={<Checkbox  name="email" />}
        label="Email"
      />
      <FormControlLabel
        control={<Checkbox  name="sms" />}
        label="SMS"
      />
      <FormControlLabel
        control={<Checkbox  name="telephone" />}
        label="Telephone"
      />
    </FormGroup>
  </FormControl>
</Grid>
 </Grid>
    </Box>
      
      
          <Box className="fieldset"  style={{borderColor:'  #bbbcbb  '}}>
          <Grid container spacing={3} alignItems="center">
         
          
            <Grid item xs={8}>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
              id='invamout'
              label="Inv_Amount"
              variant='outlined'
              size='small'
              fullWidth
              InputLabelProps={{style:{fontSize:'14px'}}}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="reason"
                label="Reason"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={5}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
         
          </Grid>
        </Box>
      
    </Box>
  );
};

export default Cancel;
