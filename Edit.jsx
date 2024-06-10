import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Edit() {
  const [labNo, setLabNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [prefix, setPrefix] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
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
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation
  const [isPhone1Valid, setIsPhone1Valid] = useState(true);
  const [isPhone2Valid, setIsPhone2Valid] = useState(true);


  // States for search results for different fields

  const [searchResultsRefBy, setSearchResultsRefBy] = useState([]);
  const [searchResultsCollBy, setSearchResultsCollBy] = useState([]);
  const [searchResultsBranch, setSearchResultsBranch] = useState([]);
  const [searchResultsCollMode, setSearchResultsCollMode] = useState([]);

// Error states for each search field
  const [errorRefBy, setErrorRefBy] = useState(null);
  const [errorCollBy, setErrorCollBy] = useState(null);
  const [errorBranch, setErrorBranch] = useState(null);
  const[errorCollMode, setErrorCollMode] = useState(null);

// Selected key states for each search field
  const [selectedRefByKey, setSelectedRefByKey] = useState('');
  const [selectedCollByKey, setSelectedCollByKey] = useState('');
  const [selectedBranchKey, setSelectedBranchKey] = useState('');
  const[selectedCollModeKey,setSelectedCollModeKey] = useState('')


  useEffect(() => {
    setIsDataUpdated(prefix !== (invoiceData?.Inv_Tittle || '') ||
      name !== (invoiceData?.Inv_name || '') ||
      day !== (invoiceData?.Inv_ageDD || '') ||
      month !== (invoiceData?.Inv_ageMM || '') ||
      year !== (invoiceData?.Inv_ageYY || '') ||
      gender !== (invoiceData?.Inv_Gender || '') ||
      dob !== (invoiceData?.Inv_Dob || '') ||
      phone1 !== (invoiceData?.Inv_phno || '') ||
      phone2 !== (invoiceData?.Inv_Mob || '') ||
      email !== (invoiceData?.Inv_Email || '') ||
      nationality !== (invoiceData?.Inv_Nationality || '') ||
      outDr !== (invoiceData?.Inv_OutDr || '') ||
      passport !== (invoiceData?.Inv_Passport || '') ||
      srfNo !== (invoiceData?.Inv_SRFno || '') ||
      aadhar !== (invoiceData?.Inv_Aadhaar || '') ||
      refBy !== (invoiceData?.Inv_RefBy || '') ||
      branch !== (invoiceData?.Branch || '') ||
      collBy !== (invoiceData?.Inv_CollBy || '') ||
      collMode !== (invoiceData?.Inv_CollMode || '') ||
      wardNo !== (invoiceData?.Inv_Ward || '') ||
      ipOpNo !== (invoiceData?.Inv_RsltNO || '') ||
      sampleOn !== (invoiceData?.SmplDate || '') ||
      reportOn !== (invoiceData?.RepTime || '') ||
      reportRequestedThrough.personally !== (invoiceData?.Inv_RepThrPersonal || false) ||
      reportRequestedThrough.whatsapp !== (invoiceData?.Inv_RepThrCourier || false) ||
      reportRequestedThrough.courier !== (invoiceData?.Inv_RepThrPhone || false) ||
      reportRequestedThrough.email !== (invoiceData?.Inv_RepThrEmail || false) ||
      reportRequestedThrough.sms !== (invoiceData?.Inv_RepThrSms || false) ||
      reportRequestedThrough.telephone !== (invoiceData?.Inv_RepThrPhone || false)||
      address !== (invoiceData?.Inv_Address || '') );
  }, [prefix, name, day, month, year, gender,dob, phone1,
     phone2, email, nationality, address,outDr,passport,srfNo,
     wardNo,ipOpNo,aadhar,refBy,branch,collBy,collMode,sampleOn, reportOn, reportRequestedThrough, invoiceData]);


  useEffect(() => {
    const prefixToGender = {
      Mr: 'M',
      Mrs: 'F',
      Ms: 'F',
      Miss: 'F',
    };

    setGender(prefixToGender[prefix] || '');
  }, [prefix]);
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
      const validPrefixes = ['', 'Mr', 'Mrs', 'Ms', 'Miss'];
      setPrefix(validPrefixes.includes(response.data.invoiceDtls.Inv_Tittle) ? response.data.invoiceDtls.Inv_Tittle : '');
      setName(response.data.invoiceDtls.Inv_name || '');
      setDay(response.data.invoiceDtls.Inv_ageDD !== null && response.data.invoiceDtls.Inv_ageDD !== undefined ? response.data.invoiceDtls.Inv_ageDD : '');
      setMonth(response.data.invoiceDtls.Inv_ageMM || '');
      setYear(response.data.invoiceDtls.Inv_ageYY || '');
      setDob(response.data.invoiceDtls.Inv_Dob || '');
      const validGender = ['', 'M', 'F', 'O'];
      setGender(validGender.includes(response.data.invoiceDtls.Inv_Gender) ? response.data.invoiceDtls.Inv_Gender : '');
      setEmail(response.data.invoiceDtls.Inv_Email || '');
      setPhone1(response.data.invoiceDtls.Inv_phno || '');
      setPhone2(response.data.invoiceDtls.Inv_Mob || '');
      setNationality(response.data.invoiceDtls.Inv_Nationality || '');
      setAddress(response.data.invoiceDtls.Inv_Address || '');
      setOutDr(response.data.invoiceDtls.Inv_OutDr || '');
      setSrfNo(response.data.invoiceDtls.Inv_SRFno !== null && response.data.invoiceDtls.Inv_SRFno !== undefined ? response.data.invoiceDtls.Inv_SRFno : '');
      setRefBy(response.data.invoiceDtls.Inv_RefBy || '');
      setBranch(response.data.invoiceDtls.Branch || '');
      setCollBy(response.data.invoiceDtls.Inv_CollBy || '');
      setCollMode(response.data.invoiceDtls.Inv_CollMode || '');
      setPassport(response.data.invoiceDtls.Inv_Passport || '');
      setAadhar(response.data.invoiceDtls.Inv_Aadhaar || '');
      setIpOpNo(response.data.invoiceDtls.Inv_RsltNO || '');
      setWardNo(response.data.invoiceDtls.Inv_Ward || '');
      setReportRequestedThrough({
        personally: response.data.invoiceDtls.Inv_RepThrPersonal || false,
        whatsapp: response.data.invoiceDtls.Inv_RepThrCourier || false,
        courier: response.data.invoiceDtls.Inv_RepThrPhone || false,
        email: response.data.invoiceDtls.Inv_RepThrEmail || false,
        sms: response.data.invoiceDtls.Inv_RepThrSms || false,
        telephone: response.data.invoiceDtls.Inv_RepThrPhone || false,
      });
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
      Inv_Tittle: prefix,
      Inv_name: name,
      Inv_ageDD: age,
      Inv_ageMM: month,
      Inv_ageYY: year,
      Inv_Gender: gender,
      Inv_Dob:dob,
      Inv_Email: email,
      Inv_phno: phone1,
      Inv_Mob: phone2,
      Inv_Nationality: nationality,
      Inv_Address: address,
      Inv_Aadhaar:aadhar,
      Inv_OutDr:outDr,
      Inv_Passport:passport,
      Inv_RsltNO:ipOpNo,
      Inv_SRFno:srfNo,
      Inv_Ward:wardNo,
      Inv_CollBy:collBy,
      Inv_CollMode:collMode,
      Inv_RefBy: refBy,
      Branch:branch,
      Inv_RepThrPersonal: reportRequestedThrough.personally,
      Inv_RepThrCourier: reportRequestedThrough.whatsapp,
      Inv_RepThrPhone: reportRequestedThrough.courier,
      Inv_RepThrEmail: reportRequestedThrough.email,
      Inv_RepThrSms: reportRequestedThrough.sms,
      Inv_RepThrTelephone: reportRequestedThrough.telephone
 })
      .then(response => {
        console.log('Data saved successfully: ', response.data);
        toast.success('Data updated successfully!');
          console.log('Updated refby:', refBy); // Show success message
          console.log('Updated branch:', branch);
          console.log('Updated outdr:', outDr);
          console.log('Updated passport:', passport);
          console.log('Updated wardno:', wardNo);
          console.log('Updated srfno:', srfNo);
          console.log('Updated aadhar:', aadhar);
          console.log('Updated ipopno:', ipOpNo);
          console.log('Updated phone1:', phone2);
          console.log('Updated collmode:', collMode);
          console.log('Updated collby:', collBy);
          console.log('Updated reportrequestedthrough:', reportRequestedThrough);
  
        })
        .catch(error => {
          console.error('Error saving data:', error);
          toast.error('Error saving data.');
        });
    };
  
    const calculateAge = (dob) => {
      if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
    
        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();
    
        // Adjust for negative months
        if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
          years--;
          months += 12;
        }
    
        // Adjust for negative days
        if (days < 0) {
          const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
          days = tempDate.getDate() - birthDate.getDate() + today.getDate();
          months--;
        }
    
        // Update the age states
        setYear(years.toString());
        setMonth(months.toString());
        setDay(days.toString());
        setAge(years.toString()); // Update the age state as well
      }
    };

    // Function to fetch search results from the API
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
    
    // Function to handle search input changes and fetch results based on searchType
    const handleSearchChange = async (searchType, value, setSearchResults, setError) => {
      try {
        const results = await fetchSearchResults(searchType, value);
        switch (searchType) {
          
          case 'RefBy':
            results.refByDetails.sort((a, b) => {
              const nameA = a.AhMst_pName.trim().toLowerCase();
              const nameB = b.AhMst_pName.trim().toLowerCase();
              return nameA.localeCompare(nameB);
            });
            setSearchResults(results.refByDetails);
            setError(null);
            break;
  
          case 'CollBy':
            results.collByDetails.sort((a, b) => {
              const nameA = a.AhMst_pName.trim().toLowerCase();
              const nameB = b.AhMst_pName.trim().toLowerCase();
              return nameA.localeCompare(nameB);
            });
            setSearchResults(results.collByDetails);
            setError(null);
            break;
  
            case 'Branch':
              results.brnchDetails.sort((a, b) => {
                const nameA = a.BrMst_Name.trim().toLowerCase();
                const nameB = b.BrMst_Name.trim().toLowerCase();
                return nameA.localeCompare(nameB);
              });
              setSearchResults(results.brnchDetails);
              console.log(results.brnchDetails);
              setError(null);
              break;
  
              case 'CollMode':
                results.mastrDetails.sort((a, b) => {
                  const nameA = a.Mstr_Desc.trim().toLowerCase();
                  const nameB = b.Mstr_Desc.trim().toLowerCase();
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
     // Event handler for RefBy field changes
     const handleRefByChange = (event, newValue) => {
      console.log('New value selected:', newValue);
      if (newValue) {
        const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
        console.log('Selected Ref By:', selectedRefBy);
        if (selectedRefBy) {
          setSelectedRefByKey(selectedRefBy.AhMst_Key);
          console.log('Selected Ref By Key:', selectedRefBy.AhMst_Key);
          // Update the state with the selected value
          setRefBy(selectedRefBy.AhMst_pName);
          console.log('Ref By state updated:', selectedRefBy.AhMst_pName);
        }
      }
    };
    
   // Event handler for CollBy field changes
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
     // Event handler for Branh field changes
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
   // Event handler for CollMode field changes
   const handleCollModeChange = (event, newValue) => {
      if (newValue) {
        const selectedCollMode = searchResultsCollMode.find(result => result.Mstr_Desc === newValue);
        if (selectedCollMode) {
         setSelectedCollModeKey(selectedCollMode.Mstr_Key);
          console.log('Selected CollMode Key:', selectedCollMode.Mstr_Key);
        }
      }
      setCollMode(newValue);
    }; 
    
      // Event handler for report requested through checkbox changes
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setReportRequestedThrough((prevState) => ({
          ...prevState,
          [name]: checked
        }));
      };
      
  // Event handler for urgent work checkbox changes
  // const handleCheckChange = (event) => {
  //   setReport({
  //     ...report,
  //     [event.target.name]: event.target.checked,
  //   });
  // };
    
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
            <Grid item xs={12} sm={2}>
                <FormControl variant="outlined" size="small" fullWidth>
                  <InputLabel id="prefixLabel">Prefix</InputLabel>
                  <Select
                    labelId="prefixLabel"
                    id="prefix"
                    value={prefix}
                    onChange={(e) => setPrefix(e.target.value)}
                    label="Prefix"
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Mr">Mr</MenuItem>
                    <MenuItem value="Mrs">Mrs</MenuItem>
                    <MenuItem value="Ms">Ms</MenuItem>
                    <MenuItem value="Miss">Miss</MenuItem>
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
                value={day}
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
                value={month}
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid> <Grid item xs={12} sm={3}>
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel id="genderLabel">Gender</InputLabel>
                    <Select
                      labelId="genderLabel"
                      id="gender"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      label="Gender"
                    >
                      <MenuItem value=""><em>None</em></MenuItem>
                      <MenuItem value="M">Male</MenuItem>
                      <MenuItem value="F">Female</MenuItem>
                      <MenuItem value="O">Other</MenuItem>
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
                onChange={(e) => {
                  setDob(e.target.value);
                  calculateAge(e.target.value);
                }}
                InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
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
                  onChange={(e) => {
                    setPhone1(e.target.value)
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
                onChange={(e) => {
                  setPhone2(e.target.value)
                  setIsPhone2Valid(true)
                }}
                InputLabelProps={{ style: { fontSize: '14px' } }}
                error={!isPhone2Valid} // Apply error style if email is invalid
                helperText={!isPhone2Valid ? "Invalid Phone number" : ""}
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
                id="nationality"
                label="Nationality"
                variant="outlined"
                size="small"
                fullWidth
                value={nationality}
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
                value={address}
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
                value={outDr}
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
                value={passport}
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
                value={srfNo}
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
                value={aadhar}
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
                value={wardNo}
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
                value={ipOpNo}
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
              value={sampleOn}
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
              value={reportOn}
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
        control={
          <Checkbox 
            checked={reportRequestedThrough.personally} 
            onChange={handleCheckboxChange} 
            name="personally" 
          />
        }
        label="Personally"
      />
      <FormControlLabel
        control={
          <Checkbox 
            checked={reportRequestedThrough.whatsapp} 
            onChange={handleCheckboxChange} 
            name="whatsapp" 
          />
        }
        label="WhatsApp"
      />
      <FormControlLabel
        control={
          <Checkbox 
            checked={reportRequestedThrough.courier} 
            onChange={handleCheckboxChange} 
            name="courier" 
          />
        }
        label="Courier"
      />
      <FormControlLabel
        control={
          <Checkbox 
            checked={reportRequestedThrough.email} 
            onChange={handleCheckboxChange} 
            name="email" 
          />
        }
        label="Email"
      />
      <FormControlLabel
        control={
          <Checkbox 
            checked={reportRequestedThrough.sms} 
            onChange={handleCheckboxChange} 
            name="sms" 
          />
        }
        label="SMS"
      />
      <FormControlLabel
        control={
          <Checkbox 
            checked={reportRequestedThrough.telephone} 
            onChange={handleCheckboxChange} 
            name="telephone" 
          />
        }
        label="Telephone"
      />
    </FormGroup>
  </FormControl>
</Grid>


 </Grid>
    </Box>
      )}
      {/* {invoiceData && (
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
      )} */}
      <ToastContainer />
    </Box>
  );
}

export default Edit;
  
