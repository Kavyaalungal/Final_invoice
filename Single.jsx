import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Box, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, Autocomplete } from '@mui/material';
import Navbar from './Navbar';

function Single() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
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
  const [email, setEmail] = useState('');
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
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    whatsapp: false,
    courier: false,
    email: false,
    sms: false,
    telephone: false,
  });
  const [field, setField] = useState('');
  const [report, setReport] = useState({ urgentwork: false });
  const [notes, setNotes] = useState('');

// for searching

  const [searchResultsRefBy, setSearchResultsRefBy] = useState([]);
  const [searchResultsCollBy, setSearchResultsCollBy] = useState([]);
  const [searchResultsBranch, setSearchResultsBranch] = useState([]);
  const [searchResultsCollMode, setSearchResultsCollMode] = useState([]);


  const [errorRefBy, setErrorRefBy] = useState(null);
  const [errorCollBy, setErrorCollBy] = useState(null);
  const [errorBranch, setErrorBranch] = useState(null);
  const[errorCollMode, setErrorCollMode] = useState(null);

  const [selectedRefByKey, setSelectedRefByKey] = useState('');
  const [selectedCollByKey, setSelectedCollByKey] = useState('');
  const [selectedBranchKey, setSelectedBranchKey] = useState('');
  const[selectedCollModeKey,setSelectedCollModeKey] = useState('')
  // const [searchResults, setSearchResults] = useState([]);
  // const [error, setError] = useState(null);

  const fetchSearchResults = async (searchType, value) => {
    try {
      const response = await axios.get(`http://172.16.16.10:8082/api/SearchMaster`, {
        params: {
          SrchItem: searchType,
          SrchVal: value
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch search results');
    }
  };

  // const handleSearchChange = async (searchType, value) => {
  //   try {
  //     const results = await fetchSearchResults(searchType, value);
  //     // Sort the results alphabetically by the AhMst_pName property
  //     results.sort((a, b) => {
  //       // Convert names to lowercase and trim leading/trailing spaces
  //       const nameA = a.AhMst_pName.trim().toLowerCase();
  //       const nameB = b.AhMst_pName.trim().toLowerCase();
  //       // Compare the names using localeCompare() for proper alphabetical sorting
  //       return nameA.localeCompare(nameB);
  //     });
  //     setSearchResults(results);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };
  

  const handleSearchChange = async (searchType, value, setSearchResults, setError) => {
    try {
      const results = await fetchSearchResults(searchType, value);
      switch (searchType) {
        
        case 'RefBy':
          // Sort the results alphabetically by the AhMst_pName property
          results.refByDetails.sort((a, b) => {
            // Convert names to lowercase and trim leading/trailing spaces
            const nameA = a.AhMst_pName.trim().toLowerCase();
            const nameB = b.AhMst_pName.trim().toLowerCase();
            // Compare the names using localeCompare() for proper alphabetical sorting
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.refByDetails);
          setError(null);
          break;

        case 'CollBy':
          // Sort the results alphabetically by the AhMst_pName property
          results.collByDetails.sort((a, b) => {
            // Convert names to lowercase and trim leading/trailing spaces
            const nameA = a.AhMst_pName.trim().toLowerCase();
            const nameB = b.AhMst_pName.trim().toLowerCase();
            // Compare the names using localeCompare() for proper alphabetical sorting
            return nameA.localeCompare(nameB);
          });
          setSearchResults(results.collByDetails);
          setError(null);
          break;

          case 'Branch':
            // Sort the results alphabetically by the AhMst_pName property
            results.brnchDetails.sort((a, b) => {
              // Convert names to lowercase and trim leading/trailing spaces
              const nameA = a.BrMst_Name.trim().toLowerCase();
              const nameB = b.BrMst_Name.trim().toLowerCase();
              // Compare the names using localeCompare() for proper alphabetical sorting
              return nameA.localeCompare(nameB);
            });
            setSearchResults(results.brnchDetails);
            console.log(results.brnchDetails);
            setError(null);
            break;

            case 'CollMode':
              // Sort the results alphabetically by the AhMst_pName property
              results.mastrDetails.sort((a, b) => {
                // Convert names to lowercase and trim leading/trailing spaces
                const nameA = a.Mstr_Desc.trim().toLowerCase();
                const nameB = b.Mstr_Desc.trim().toLowerCase();
                // Compare the names using localeCompare() for proper alphabetical sorting
                return nameA.localeCompare(nameB);
              });
              setSearchResults(results.mastrDetails);
              console.log(results.mastrDetails);
              setError(null);
              break;

        default:
          break;
      }
    } catch (error) {
      setError(error.message);
    }
  };
  
  // const handleRefByChange = (event, newValue) => {
  //   if (newValue) {
  //     const selectedRefBy = searchResults.find(result => result.AhMst_pName === newValue);
  //     if (selectedRefBy) {
  //       setSelectedRefByKey(selectedRefBy.AhMst_Key);
  //       console.log('Selected Ref By Key:', selectedRefBy.AhMst_Key);
  //     }
  //   }
  //   setRefBy(newValue);
  // };
  // const handleCollByChange = (event, newValue) => {
  //   if (newValue) {
  //     const selectedCollBy = searchResults.find(result => result.AhMst_pName === newValue);
  //     if (selectedCollBy) {
  //       setSelectedCollByKey(selectedCollBy.AhMst_Key);
  //       console.log('Selected Ref By Key:', selectedCollBy.AhMst_Key);
  //     }
  //   }
  //   setCollBy(newValue);
  // };

  const handleRefByChange = (event, newValue) => {
    if (newValue) {
      const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
      if (selectedRefBy) {
        setSelectedRefByKey(selectedRefBy.AhMst_Key);
        console.log('Selected Ref By Key:', selectedRefBy.AhMst_Key);
      }
    }
    setRefBy(newValue);
  };

  const handleCollByChange = (event, newValue) => {
    if (newValue) {
      const selectedCollBy = searchResultsCollBy.find(result => result.AhMst_pName === newValue);
      if (selectedCollBy) {
        setSelectedCollByKey(selectedCollBy.AhMst_Key);
        console.log('Selected Coll By Key:', selectedCollBy.AhMst_Key);
      }
    }
    setCollBy(newValue);
  };
  const handleBranchChange = (event, newValue) => {
    if (newValue) {
      const selectedBranch = searchResultsBranch.find(result => result.BrMst_Name === newValue);
      if (selectedBranch) {
        setSelectedBranchKey(selectedBranch.BrMst_Key);
        console.log('Selected Branch Key:', selectedBranch.BrMst_Key);
      }
    }
    setBranch(newValue);
  };



  const handleCollModeChange = (event, newValue) => {
    if (newValue) {
      const selectedCollMode = searchResultsCollMode.find(result => result.Mstr_Desc === newValue);
      if (selectedCollMode) {
        setSelectedRefByKey(selectedCollMode.Mstr_Key);
        console.log('Selected CollMode Key:', selectedCollMode.Mstr_Key);
      }
    }
    setCollMode(newValue);
  };
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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log('Fetching data with params:', { labNo, yearId, branchId });
  //       const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
  //         params: {
  //           LabNo: labNo,
  //           YearId: yearId,
  //           BranchId: branchId,
  //         },
  //       });
  //       setInvoiceData(response.data.invoiceDtls);
  //       console.log('Invoice Data:', response.data.invoiceDtls);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       setError(error.message);
  //     }
  //   };

  //   if (labNo && yearId && branchId) {
  //     fetchData();
  //   }
  // }, [labNo, yearId, branchId]);
  const handleCheckboxChange = (event) => {
    setReportRequestedThrough({
      ...reportRequestedThrough,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCheckChange = (event) => {
    setReport({
      ...report,
      [event.target.name]: event.target.checked,
    });
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
              Fetch Data
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
  <FormControl variant="outlined" size="small" fullWidth>
    <InputLabel id="dateTimeLabel">Date/Time</InputLabel>
    <Select
      labelId="dateTimeLabel"
      id="dateTime"
      value={`${invoiceData.Inv_Date} ${invoiceData.Inv_time}` || ''}
      onChange={(e) => setDateTime(e.target.value)}
      label="Date/Time"
    >
      <MenuItem value=""><em>None</em></MenuItem>
      <MenuItem value={`${invoiceData.Inv_Date} ${invoiceData.Inv_time}`}>
        {`${invoiceData.Inv_Date} ${invoiceData.Inv_time}`}
      </MenuItem>
    </Select>
  </FormControl>
</Grid>

          </Grid>
        </Box>
      )}
      {invoiceData && (
        <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel id="prefixLabel">Prefix</InputLabel>
                <Select
                  labelId="prefixLabel"
                  id="prefix"
                  value={invoiceData.Inv_Tittle || ''}
                  onChange={(e) => setPrefix(e.target.value)}
                  label="Prefix"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value={`${invoiceData.Inv_Tittle}`}>
        {`${invoiceData.Inv_Tittle}`}
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
                value={invoiceData.Inv_name || ''}
                onChange={(e) => setName(e.target.value)}
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
        value={invoiceData.Inv_ageDD || ''}
        onChange={(e) => setDay(e.target.value)}
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
        value={invoiceData.Inv_ageMM || ''}
        onChange={(e) => setMonth(e.target.value)}
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
        value={invoiceData.Inv_ageYY || ''}
        onChange={(e) => setYear(e.target.value)}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    </Grid>
    <Grid item xs={12} sm={3}>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel id="genderLabel">Gender</InputLabel>
              <Select
                labelId="genderLabel"
                id="gender"
                value={invoiceData.Inv_Gender || ''}
                
                onChange={(e) => setGender(e.target.value)}
                label="Gender"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value={`${invoiceData.Inv_Gender}`}>
        {`${invoiceData.Inv_Gender}`}</MenuItem>
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
              value={invoiceData.Inv_Dob || ''}
              onChange={(e) => setDob(e.target.value)}
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
              value={invoiceData.Inv_phno || ''}
              onChange={(e) => setPhone1(e.target.value)}
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
              value={invoiceData.Inv_Mob || ''}
              onChange={(e) => setPhone2(e.target.value)}
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
              value={invoiceData.Inv_Email || ''}
              onChange={(e) => setEmail(e.target.value)}
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
              value={invoiceData.Inv_Nationality || ''}
              onChange={(e) => setNationality(e.target.value)}
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
              value={invoiceData.Inv_Address|| ''}
              onChange={(e) => setAddress(e.target.value)}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          </Grid>
          </Grid>
        </Box>
      )}
      {invoiceData && (
          <Box className="fieldset">
          <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsRefBy.map((result) => result.AhMst_pName)}
          onInputChange={(event, newValue) => handleSearchChange('RefBy', newValue, setSearchResultsRefBy, setErrorRefBy)}
          onChange={handleRefByChange}
          renderInput={(params) => (
            <TextField
              {...params}
              id="refBy"
              label="Ref By"
              variant="outlined"
              size="small"
              fullWidth
              error={!!errorRefBy}
              helperText={errorRefBy}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          )}
        />
        <input type="hidden" id="selectedRefByKey" value={selectedRefByKey} />
      </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outdr"
                label="Out Dr"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_OutDr || ''}
                onChange={(e) => setOutDr(e.target.value)}
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
                value={invoiceData.Inv_Passport || ''}
                onChange={(e) => setPassport(e.target.value)}
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
                value={invoiceData.Inv_SRFno || ''}
                onChange={(e) => setSrfNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsBranch.map((result) => result.BrMst_Name)}
          onInputChange={(event, newValue) => handleSearchChange('Branch', newValue, setSearchResultsBranch, setErrorBranch)}
          onChange={handleBranchChange}
          renderInput={(params) => (
            <TextField
              {...params}
              id="branch"
              label="Branch"
              variant="outlined"
              size="small"
              fullWidth
              error={!!errorBranch}
              helperText={errorBranch}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          )}
        />
        <input type="hidden" id="selectedBranchKey" value={selectedBranchKey} />
      </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="aadhar"
                label="Aadhar"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_Aadhaar || ''}
                onChange={(e) => setAadhar(e.target.value)}
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
                value={invoiceData.Inv_Ward || ''}
                onChange={(e) => setWardNo(e.target.value)}
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
                value={invoiceData.Inv_RsltNO || ''}
                onChange={(e) => setIpOpNo(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsCollMode.map((result) => result.Mstr_Desc)}
          onInputChange={(event, newValue) => handleSearchChange('CollMode', newValue, setSearchResultsCollMode, setErrorCollMode)}
          onChange={handleCollModeChange}
          renderInput={(params) => (
            <TextField
              {...params}
              id="collMode"
              label="CollMode"
              variant="outlined"
              size="small"
              fullWidth
              error={!!errorCollMode}
              helperText={errorCollMode}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          )}
        />
        <input type="hidden" id="selectedCollModeKey" value={selectedCollModeKey} />
      </Grid>
            <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsCollBy.map((result) => result.AhMst_pName)}
          onInputChange={(event, newValue) => handleSearchChange('CollBy', newValue, setSearchResultsCollBy, setErrorCollBy)}
          onChange={handleCollByChange}
          renderInput={(params) => (
            <TextField
              {...params}
              id="collBy"
              label="Coll By"
              variant="outlined"
              size="small"
              fullWidth
              error={!!errorCollBy}
              helperText={errorCollBy}
              InputLabelProps={{ style: { fontSize: '14px' } }}
            />
          )}
        />
        <input type="hidden" id="selectedCollByKey" value={selectedCollByKey} />
      </Grid>
          </Grid>
        </Box>
      )}
      {invoiceData && (
      <Box className="fieldset">
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="dateTimeLabel">Sample On</InputLabel>
            <Select
              labelId="sampleon"
              id="sampleon"
              value={invoiceData.SmplDate|| ''}
        onChange={(e) => setSampleOn(e.target.value)}
              label="Sample On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={`${invoiceData.SmplDate}`}>
        {`${invoiceData.SmplDate}`}
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
              value={invoiceData.RepTime|| ''}
        onChange={(e) => setReportOn(e.target.value)}
              label="Report On"
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={`${invoiceData.RepTime}`}>
        {`${invoiceData.RepTime}`}
      </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
  <FormControl component="fieldset" fullWidth>
    <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrPersonal} onChange={handleCheckboxChange} name="personally" />}
        label="Personally"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrCourier} onChange={handleCheckboxChange} name="courier" />}
        label="Courier"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrPhone} onChange={handleCheckboxChange} name="phone" />}
        label="Phone"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrEmail} onChange={handleCheckboxChange} name="email" />}
        label="Email"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrSms} onChange={handleCheckboxChange} name="sms" />}
        label="SMS"
      />
      <FormControlLabel
        control={<Checkbox checked={invoiceData.Inv_RepThrTelephone} onChange={handleCheckboxChange} name="telephone" />}
        label="Telephone"
      />
    </FormGroup>
  </FormControl>
</Grid>

      
      </Grid>
    </Box>
      )}
      {invoiceData && (
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
                id="notes"
                label="Notes"
                variant="outlined"
                size="small"
                fullWidth
                value={invoiceData.Inv_Comment|| ''}
                onChange={(e) => setNotes(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
         
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default Single;
