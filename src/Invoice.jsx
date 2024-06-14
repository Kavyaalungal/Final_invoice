import React, { useState } from 'react';
import { TextField, Button, InputLabel, Select, MenuItem, FormControl, Grid, Box, Typography, FormControlLabel, FormGroup, Checkbox, IconButton } from '@mui/material';
import './Invoice.css';
import Navbar from './Navbar'; 


function Invoice() {


  const [invoiceData, setInvoiceData] = useState(null);
  const [labNo, setLabNo] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [prefix, setPrefix] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [email, setEamil] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [refBy, setRefBy] = useState('');
  const [outDr, setOutDr] = useState('');
  const [passport, setPassport] = useState('');
  const [srfNo, setSrfNo] = useState('');
  const [branch, setBranch] = useState('');
  const [aadhar, setAadhar] = useState('');
  const [wardNo, setWardNo] = useState('');
  const [ipOpNo, setIpOpNo] = useState('');
  const [collMode, setCollMode] = useState('');
  const [collBy, setCollBy] = useState('');
  const [sampleOn, setSampleOn] = useState('');
  const [reportOn, setReportOn] = useState('');
  const [field, setField] = useState('');
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    whatsapp: false,
    courier: false,
    email: false,
    sms: false,
    telephone: false,
  });
  const [report, setReport] = useState({
    urgentwork: false
  });

  const handleLabNoChange = (e) => {
    setLabNo(e.target.value);
  };

  const handleDateTimeChange = (e) => {
    setDateTime(e.target.value);
  };

  const handlePrefixChange = (e) => {
    setPrefix(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };
  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handlePhone1Change = (e) => {
    setPhone1(e.target.value);
  };

  const handlePhone2Change = (e) => {
    setPhone2(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEamil(e.target.value);
  };
  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleRefByChange = (e) => {
    setRefBy(e.target.value);
  };
  const  handleOutDrChange = (e) => {
    setOutDr(e.target.value);
  };
  const  handlePassportChange = (e) => {
    setPassport(e.target.value);
  };
  const handleSrfNoChange = (e) => {
    setSrfNo(e.target.value);
  };
  const handleBranchChange =(e)=>{
    setBranch(e.target.value);
  }
  const handleAadharChange =(e)=>{
    setAadhar(e.target.value);
  }
  const handleWardNoChange = (e) =>{
    setWardNo(e.target.value);
  }
  const handleIpOpNoChange = (e) =>{
    setIpOpNo(e.target.value);
  }
  const handleCollModeChange = (e) =>{
    setCollMode(e.target.value);
  }
  const handleCollBYChange = (e) =>{
    setCollBy(e.target.value);
  }
 
  const handleFieldChange = (e) => {
    setField(e.target.value);
  };

  const handleReportOnChange = (e) => {
    setReportOn(e.target.value);
  };
  const handleSampleOnChange = (e) => {
    setSampleOn(e.target.value);
  };

  const handleCheckboxChange = (event) => {
    setReportRequestedThrough({ ...reportRequestedThrough, [event.target.name]: event.target.checked });
  };
  const handleCheckChange = (event) => {
    setReport({ ...report, [event.target.name]: event.target.checked });
  };

  return (
    <Box className="edit-invoice-container">
      <Navbar/>
      
      <Box className="navbar" >
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
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="dateTimeLabel">Date/Time</InputLabel>
              <Select
                labelId="dateTimeLabel"
                id="dateTime"
                value={dateTime}
                onChange={handleDateTimeChange}
                label="Date/Time"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="2024-06-01 10:00">2024-06-01 10:00</MenuItem>
                <MenuItem value="2024-06-01 14:00">2024-06-01 14:00</MenuItem>
                <MenuItem value="2024-06-02 09:00">2024-06-02 09:00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={2}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="prefixLabel">Prefix</InputLabel>
              <Select
                labelId="prefixLabel"
                id="prefix"
                value={prefix}
                onChange={handlePrefixChange}
                label="Prefix"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Ms">Ms</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
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
              value={name}
              onChange={handleNameChange}
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
        value={day}
        onChange={handleDayChange}
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
        value={month}
        onChange={handleMonthChange}
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
        value={year}
        onChange={handleYearChange}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel">Gender</InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                label="Gender"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
  </Grid>
        
          <Grid item xs={12} sm={4}>
            <TextField
              id="dob"
              label="Date of Birth"
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={dob}
              onChange={handleDobChange}
              InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone1"
              label="Phone Number 1"
              variant="outlined"
              size="small"
              fullWidth
              value={phone1}
              onChange={handlePhone1Change}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone2"
              label="Phone Number 2"
              variant="outlined"
              size="small"
              fullWidth
              value={phone2}
              onChange={handlePhone2Change}
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
              onChange={handleEmailChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="nationality"
              label="Nationality"
              variant="outlined"
              size="small"
              fullWidth
              value={nationality}
              onChange={handleNationalityChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              size="small"
              fullWidth
              value={address}
              onChange={ handleAddressChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
            <TextField
              id="refby"
              label="Ref by"
              variant="outlined"
              size="small"
              fullWidth
              value={refBy}
              onChange={handleRefByChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outdr"
              label="Out Dr"
              variant="outlined"
              size="small"
              fullWidth
              value={outDr}
              onChange={handleOutDrChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="passport"
              label="Passport"
              variant="outlined"
              size="small"
              fullWidth
              value={passport}
              onChange={handlePassportChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="srfno"
              label="SRF No."
              variant="outlined"
              size="small"
              fullWidth
              value={srfNo}
              onChange={handleSrfNoChange}
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
              value={branch}
              onChange={handleBranchChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="aadhar"
              label="Aadhar"
              variant="outlined"
              size="small"
              fullWidth
              value={aadhar}
              onChange={handleAadharChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="wardno"
              label="Ward No"
              variant="outlined"
              size="small"
              fullWidth
              value={wardNo}
              onChange={handleWardNoChange}
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
              value={ipOpNo}
              onChange={handleIpOpNoChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="collmode"
              label="Coll Mode."
              variant="outlined"
              size="small"
              fullWidth
              value={collMode}
              onChange={handleCollModeChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="collby"
              label="Coll By."
              variant="outlined"
              size="small"
              fullWidth
              value={collBy}
              onChange={handleCollBYChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          
        </Grid>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="dateTimeLabel">Sample On</InputLabel>
              <Select
                labelId="sampleon"
                id="sampleon"
                value={sampleOn}
                onChange={handleSampleOnChange}
                label="Sample On"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="2024-06-01 10:00">2024-06-01 10:00</MenuItem>
                <MenuItem value="2024-06-01 14:00">2024-06-01 14:00</MenuItem>
                <MenuItem value="2024-06-02 09:00">2024-06-02 09:00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="dateTimeLabel">Report On</InputLabel>
              <Select
                labelId="reporton"
                id="reporton"
                value={reportOn}
                onChange={handleReportOnChange}
                label="Report On"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="2024-06-01 10:00">2024-06-01 10:00</MenuItem>
                <MenuItem value="2024-06-01 14:00">2024-06-01 14:00</MenuItem>
                <MenuItem value="2024-06-02 09:00">2024-06-02 09:00</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
              <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.personally} onChange={handleCheckboxChange} name="personally" />}
                  label="Personally"
                />
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.whatsapp} onChange={handleCheckboxChange} name="whatsapp" />}
                  label="WhatsApp"
                />
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.courier} onChange={handleCheckboxChange} name="courier" />}
                  label="Courier"
                />
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.email} onChange={handleCheckboxChange} name="email" />}
                  label="Email"
                />
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.sms} onChange={handleCheckboxChange} name="sms" />}
                  label="SMS"
                />
                <FormControlLabel
                  control={<Checkbox checked={reportRequestedThrough.telephone} onChange={handleCheckboxChange} name="telephone" />}
                  label="Telephone"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="field"
              
              variant="outlined"
              size="small"
              fullWidth
              value={field}
              onChange={handleFieldChange}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
       
        </Grid>
      </Box>
      <Box className="fieldset">
        <Grid container spacing={3} alignItems="center">
       
        
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth>
              <FormGroup row>
               <FormControlLabel
                  control={<Checkbox checked={report.urgentwork} onChange={handleCheckChange} name="urgentwork" />}
                  label="Urgent Report"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="address"
              label="Notes"
              variant="outlined"
              size="small"
              fullWidth
              value={phone2}
              onChange={handlePhone2Change}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
       
        </Grid>
      </Box>
    </Box>
  );
}

export default Invoice;
