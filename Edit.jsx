import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Box, Typography, FormControl, InputLabel, Select, MenuItem, Autocomplete, FormControlLabel, FormGroup, Checkbox } from '@mui/material';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Edit() {
  const [labNo, setLabNo] = useState('');
  const [invNo, setInvNo] = useState('');
  const [branchId, setBranchId] = useState('');
  const [yearId, setYearId] = useState('');
  const [cpyId, setCpyId] = useState(null);
  const [invDate, setInvDate] = useState('');
  const [invTime, setInvTime] = useState('');
  const [prefix, setPrefix] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');
  const [wardId,setWardId] = useState('')
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
  // const [sampleOn, setSampleOn] = useState('');
  // const [reportOn, setReportOn] = useState('');
  const [reportRequestedThrough, setReportRequestedThrough] = useState({
    personally: false,
    courier: false,
    phone: false,
    email: false,
    sms: false,
    
  });
  const [report, setReport] = useState({ urgentwork: false });
  const [notes, setNotes] = useState('');
  const [invoiceData, setInvoiceData] = useState(null);
  const [error, setError] = useState(null);
  const [errorAadhar, setErrorAadhar] = useState('');
  const [isDataUpdated, setIsDataUpdated] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true); // State to track email validation
  const [isPhone1Valid, setIsPhone1Valid] = useState(true);
  const [isPhone2Valid, setIsPhone2Valid] = useState(true);

  const [smplDate, setSmplDate] = useState('');
  const [invSmplDate, setInvSmplDate] = useState('');
  const [repTime, setRepTime] = useState('');
  const [invRepTime, setInvRepTime] = useState('');
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

  const [invData, setInvData] = useState({
    Inv_DrId: invoiceData?.Inv_DrId || 0,
    Inv_CltnID: invoiceData?.Inv_CltnID || 0,
    Inv_CollModeId:invoiceData?.Inv_CollModeId || 0,
    Inv_BrId:invoiceData?.Inv_BrId || 0
  });
  useEffect(() => {
    // Check if yrId is updated
    if (yearId !== null) {
        // Update cpyId to match yrId
        setCpyId(yearId);
    }
}, [yearId]); // Run this effect whenever yrId changes

// Function to update yrId
// const updateYrId = (newValue) => {
//     setYrId(newValue);
// };

 useEffect(() => {

    setIsDataUpdated(
      prefix !== (invoiceData?.Inv_Tittle || '') ||
      // labNo !== (invoiceData?.LabNo || '') ||
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
      smplDate !== (invoiceData?.SmplDate || '') ||
      invSmplDate !== (invoiceData?.Inv_SmplDate || '') ||
      repTime !== (invoiceData?.RepTime || '') ||
     invRepTime !== (invoiceData?.Inv_RepTime || '') ||
      notes !== (invoiceData?.Inv_Comment || '') ||
      wardId !== (invoiceData?.Inv_WardId || '') ||
      reportRequestedThrough.personally !== (invoiceData?.Inv_RepThrPersonal || false) ||
      reportRequestedThrough.courier !== (invoiceData?.Inv_RepThrCourier || false) ||
      reportRequestedThrough.phone !== (invoiceData?.Inv_RepThrPhone || false) ||
      reportRequestedThrough.sms !== (invoiceData?.Inv_RepThrSms || false) ||
      reportRequestedThrough.email !== (invoiceData?.Inv_RepThrEmail || false) ||
      address !== (invoiceData?.Inv_Address || '') ||
      invDate !== (invoiceData?.Inv_Date || '') ||  
      invTime !== (invoiceData?.Inv_time || '')||
      invNo !== (invoiceData?.Inv_No || '') 
    );
  }, [prefix, name, day, month, year, gender, dob, phone1, phone2, email, nationality, address,
    outDr, passport, srfNo, wardNo, ipOpNo, aadhar, refBy, branch, collBy, collMode,
    repTime, notes, reportRequestedThrough, invDate, invTime ,invNo,smplDate,wardId,invRepTime,invSmplDate, invoiceData,
  ]);
  // const handleSmplDateChange = (event) => {
  //   const newSmplDate = event.target.value;
    
  //   // Convert the new date to the required formats
  //   const newDate = new Date(newSmplDate);
  //   const formattedSmplDate = `${newDate.getMonth()}/${newDate.getDate()}/${newDate.getFullYear()} 12:00:00 AM`;
  //   const formattedInvSmplDate = newDate.toISOString().split('T')[0];
    
  //   // Update the state
  //   setSmplDate(formattedSmplDate);
  //   setInvSmplDate(formattedInvSmplDate);
  // };
  
  // useEffect(() => {
  //   if (invoiceData) {
  //     const initialDate = new Date(invoiceData.SmplDate);
  //     const formattedSmplDate = `${initialDate.getFullYear()}-${(initialDate.getMonth() + 1).toString().padStart(2, '0')}-${initialDate.getDate().toString().padStart(2, '0')}`;
  //     setSmplDate(formattedSmplDate);
  //     setInvSmplDate(initialDate.toISOString().split('T')[0]);
  //   }
  // }, [invoiceData]);

  // const handleSmplDateChange = (event) => {
  //   const newSmplDate = event.target.value;

  //   // Update the state with the new date
  //   setSmplDate(newSmplDate);

  //   // Convert the new date to the required formats
  //   const newDate = new Date(newSmplDate);
  //   const formattedSmplDate = `${(newDate.getMonth() + 1).toString().padStart(2, '0')}/${newDate.getDate().toString().padStart(2, '0')}/${newDate.getFullYear()} 12:00:00 AM`;
  //   const formattedInvSmplDate = newDate.toISOString().split('T')[0];

  //   // Update the state with formatted dates
  //   setSmplDate(formattedSmplDate);
  //   setInvSmplDate(formattedInvSmplDate);
  // };

useEffect(() => {
    const prefixToGender = { Mr: 'M',Mrs: 'F',Ms: 'F', Miss: 'F',
    };

    setGender(prefixToGender[prefix] || '');
  }, [prefix]);


  const handleAadharChange = (e) => {
    const inputValue = e.target.value;
    setAadhar(inputValue);
    
    // Clear Aadhar error when Aadhar field is changed
    if (!/^\d{12}$/.test(inputValue)) {
      setErrorAadhar('Aadhar number must be 12 digits');
    } else {
      setErrorAadhar('');
    }
  };
  

  const handleAadharBlur = () => {
    // Validate Aadhar number when input loses focus
    if (!/^\d{12}$/.test(aadhar)) {
      setErrorAadhar('Aadhar number must be 12 digits');
      toast.error('Aadhar number must be 12 digits'); // Display toast message
    }
  };


  // Function to validate email using regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
// function to validate phone number
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

// for fetching data
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://172.16.16.10:8082/api/EditInvoice`, {
        params: {
          LabNo: labNo,
          YearId: yearId,
          BranchId: branchId,
        },
      });
      const invoiceData = response.data.invoiceDtls;
      setInvoiceData(invoiceData);
      const refByValue = invoiceData.Inv_RefBy || '';
      setRefBy(refByValue);

      // Initialize search results if Ref By value exists
      if (refByValue) {
        setSearchResultsRefBy([{ AhMst_pName: refByValue }]);
      } else {
        setSearchResultsRefBy([]);
      }

       // Initialize CollBy field
       const collByValue = invoiceData.Inv_CollBy || '';
       setCollBy(collByValue);
       if (collByValue) {
         setSearchResultsCollBy([{ AhMst_pName: collByValue }]);
       } else {
         setSearchResultsCollBy([]);
       }

       const collModeValue = invoiceData.Inv_CollMode || '';
       setCollMode(collModeValue);
       if (collModeValue) {
         setSearchResultsCollMode([{ Mstr_Desc: collModeValue }]);
       } else {
         setSearchResultsCollMode([]);
       }
       const branchValue = invoiceData.Branch || '';
       setBranch(branchValue);
       if (branchValue) {
         setSearchResultsBranch([{BrMst_Name: branchValue }]);
       } else {
         setSearchResultsBranch([]);
       }
    setInvData({
      Inv_DrId: invoiceData?.Inv_DrId || 0,
      Inv_CltnID: invoiceData?.Inv_CltnID || 0,
      Inv_CollModeId:invoiceData?.Inv_CollModeId || 0,
      Inv_BrId:invoiceData?.Inv_BrId || 0
        });


     // Formatting the dates
    // Formatting the dates
    const initialSmplDate = new Date(invoiceData.SmplDate);
    const formattedSmplDate = formatToUTC(initialSmplDate, 'MM/DD/YYYY 12:00:00 AM');
    const formattedInvSmplDate = initialSmplDate.toISOString().split('T')[0];

    const initialRepTime = new Date(invoiceData.Inv_RepTime);
    const formattedRepTime = formatToUTC(initialRepTime, 'MM/DD/YYYY 12:00:00 AM');
    const formattedInvRepTime = initialRepTime.toISOString().split('T')[0];

    setSmplDate(formattedSmplDate);
    setInvSmplDate(formattedInvSmplDate);
    setRepTime(formattedRepTime);
    setInvRepTime(formattedInvRepTime);

     setSmplDate(formattedSmplDate);
     setInvSmplDate(formattedInvSmplDate);
     setRepTime(formattedRepTime);
     setInvRepTime(formattedInvRepTime);

      setInvNo(invoiceData?.Inv_No || '');
      const validPrefixes = ['', 'Mr', 'Mrs', 'Ms', 'Miss'];
      setPrefix(validPrefixes.includes(invoiceData.Inv_Tittle) ? invoiceData.Inv_Tittle : '');
      setName(invoiceData.Inv_name || '');
      setDay(invoiceData.Inv_ageDD !== null && invoiceData.Inv_ageDD !== undefined ? invoiceData.Inv_ageDD : '');
      setMonth(invoiceData.Inv_ageMM || '');
      setYear(invoiceData.Inv_ageYY || '');
      setDob(invoiceData.Inv_Dob || '');
      const validGender = ['', 'M', 'F', 'O'];
      setGender(validGender.includes(invoiceData.Inv_Gender) ? invoiceData.Inv_Gender : '');
      setEmail(invoiceData.Inv_Email || '');
      setPhone1(invoiceData.Inv_phno || '');
      setPhone2(invoiceData.Inv_Mob || '');
      setNationality(invoiceData.Inv_Nationality || '');
      setAddress(invoiceData.Inv_Address || '');
      setNotes(invoiceData.Inv_Comment || '');
      setOutDr(invoiceData.Inv_OutDr || '');
      setSrfNo(invoiceData.Inv_SRFno !== null && invoiceData.Inv_SRFno !== undefined ? invoiceData.Inv_SRFno : '');
      setRefBy(invoiceData.Inv_RefBy || '');
      setSearchResultsRefBy([invoiceData.Inv_RefBy]);
      setBranch(invoiceData.Branch || '');
      setCollMode(invoiceData.Inv_CollMode || '');
      setWardId(invoiceData.Inv_WardId || '');
      // setSearchResultsBranch([{ BrMst_Name: invoiceData.Branch }]);
      // setSearchResultsCollMode([{ Mstr_Desc: invoiceData.Inv_CollMode }]);
      setSearchResultsBranch([invoiceData.Branch]);
      setCollBy(invoiceData.Inv_CollBy || '');
      setSearchResultsCollBy([invoiceData.Inv_CollBy]);
       setSearchResultsCollMode([invoiceData.Inv_CollMode]);
      setPassport(invoiceData.Inv_Passport || '');
      setAadhar(invoiceData.Inv_Aadhaar || '');
      setIpOpNo(invoiceData.Inv_RsltNO || '');
      setWardNo(invoiceData.Inv_Ward || '');
      setReportRequestedThrough({
        personally:invoiceData.Inv_RepThrPersonal || false,
        courier: invoiceData.Inv_RepThrCourier || false,
        phone: invoiceData.Inv_RepThrPhone || false,
        email:invoiceData.Inv_RepThrEmail || false,
        sms: invoiceData.Inv_RepThrSms || false,
        
      });
      setSmplDate(invoiceData.SmplDate || '');
      setRepTime(invoiceData.RepTime || '');
      setInvRepTime(invoiceData.Inv_RepTime || '');
      setInvDate(invoiceData.Inv_Date || '');
      setInvTime(invoiceData.Inv_time || '');
      setInvSmplDate(invoiceData.Inv_SmplDate)
    } catch (error) {
      setError(error.message);
    }
  };


  const formatToUTC = (date, format) => {
    const utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return utcDate.toLocaleDateString('en-US', options) + ' 12:00:00 AM';
  };

  const handleSmplDateChange = (event) => {
    const newInvSmplDate = event.target.value;
    const newDate = new Date(newInvSmplDate);

    const formattedSmplDate = formatToUTC(newDate, 'MM/DD/YYYY 12:00:00 AM');
    const formattedInvSmplDate = newDate.toISOString().split('T')[0];

    setSmplDate(formattedSmplDate);
    setInvSmplDate(formattedInvSmplDate);
  };

  const handleRepTimeChange = (event) => {
    const newInvRepTime = event.target.value;
    const newDate = new Date(newInvRepTime);

    const formattedRepTime = formatToUTC(newDate, 'MM/DD/YYYY 12:00:00 AM');
    const formattedInvRepTime = newDate.toISOString().split('T')[0];

    setRepTime(formattedRepTime);
    setInvRepTime(formattedInvRepTime);
  };



  // saving data back

const saveDataToAPI = () => {

  console.log('Aadhar state:', aadhar); 
  // Check if Aadhar number is empty or not 12 digits
  if (!aadhar || !/^\d{12}$/.test(aadhar)) {
    setErrorAadhar('Aadhar number must be 12 digits');
    return;
  }
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

  const payload = {
    ...invoiceData,
    // LabNo:labNo,
    Inv_No: invNo,
    Inv_Tittle: prefix,
    Inv_name: name, 
    Inv_ageDD: day,
    Inv_ageMM: month,
    Inv_ageYY: year,
    Inv_Gender: gender,
    Inv_Dob: dob, 
    Inv_Email: email,
    Inv_phno: phone1,
    Inv_Mob: phone2,
    Inv_Nationality: nationality,
    Inv_Address: address,
    Inv_Aadhaar: aadhar,
    Inv_OutDr: outDr,
    Inv_Passport: passport,
    Inv_RsltNO: ipOpNo,
    Inv_SRFno: srfNo,
    Inv_Ward: wardNo,
    Inv_CollBy: collBy,
    Inv_CollMode: collMode,
    Inv_RefBy: refBy,
    Inv_DrId: invData.Inv_DrId,
    Inv_CltnID:invData.Inv_CltnID,
    Inv_CollModeId:invData.Inv_CollModeId,
    Inv_BrId: invData.Inv_BrId,
    // Branch: branch,
    Inv_WardId:wardId || null,
    SmplDate:smplDate,
    Inv_SmplDate: invSmplDate,
    RepTime:repTime,
    Inv_RepTime:invRepTime,
    Inv_RepThrPersonal: reportRequestedThrough.personally,
    Inv_RepThrCourier: reportRequestedThrough.courier,
    Inv_RepThrPhone: reportRequestedThrough.phone,
    Inv_RepThrEmail: reportRequestedThrough.email,
     Inv_RepThrSms: reportRequestedThrough.sms,
    Inv_Comment:notes,Inv_Date: invDate,Inv_time: invTime,
  };

  // Log the payload to check if all values are correct
  console.log('Payload to be sent to API:', payload);

  axios.post('http://172.16.16.10:8082/api/EditInvSave', payload)
    .then(response => {
      console.log('Data saved successfully: ', response.data);
      toast.success('Data updated successfully!');
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
    //function to
    const handleRefByChange = (event, newValue) => {
      if (newValue) {
        const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
        if (selectedRefBy) {
          setSelectedRefByKey(selectedRefBy.AhMst_Key);
          setRefBy(newValue);
          setInvData(prevState => ({
            ...prevState,
            Inv_DrId: selectedRefBy.AhMst_Key, 
          }));
        }
      } else {
        setSelectedRefByKey('');
        setRefBy('');
        setInvData(prevState => ({
          ...prevState,
          Inv_DrId: 0, 
        }));
      }
    };
    
    
   // Event handler for CollBy field changes
   const handleCollByChange = (event, newValue) => {
    if (newValue) {
      const selectedCollBy = searchResultsCollBy.find(result => result.AhMst_pName === newValue);
      if (selectedCollBy) {
        setSelectedCollByKey(selectedCollBy.AhMst_Key);
        setCollBy(newValue);
        setInvData(prevState => ({
          ...prevState,
          Inv_CltnID: selectedCollBy.AhMst_Key, 
        }));
      }
    } else {
      setSelectedCollByKey('');
      setCollBy('');
      setInvData(prevState => ({
        ...prevState,
        Inv_CltnID: 0, 
      }));
    }
  };
     // Event handler for Branh field changes
     const handleBranchChange = (event, newValue) => {
      if (newValue) {
        const selectedBranch = searchResultsBranch.find(result => result.BrMst_Name === newValue);
        if (selectedBranch) {
          setSelectedBranchKey(selectedBranch.BrMst_Key);
          setBranch(newValue);
          setInvData(prevState => ({
            ...prevState,
            Inv_BrId: selectedBranch.BrMst_Key, 
          }));
        }
      } else {
        setSelectedBranchKey('');
        setBranch('');
        setInvData(prevState => ({
          ...prevState,
          Inv_BrId: 0, 
        }));
      }
    };
    
    const handleCollModeChange = (event, newValue) => {
      if (newValue) {
        const selectedCollMode = searchResultsCollMode.find(result => result.Mstr_Desc === newValue);
        if (selectedCollMode) {
          setSelectedCollModeKey(selectedCollMode.Mstr_Key);
          setCollMode(newValue);
          setInvData(prevState => ({
            ...prevState,
            Inv_CollModeId: selectedCollMode.Mstr_Key, 
          }));
        }
      } else {
        setSelectedCollModeKey('');
        setCollMode('');
        setInvData(prevState => ({
          ...prevState,
          Inv_CollModeId: 0, 
        }));
      }
    };
    
      // Event handler for report requested through checkbox changes
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setReportRequestedThrough(prevState => ({
          ...prevState,
          [name]: checked,
        }));
      };


      // for clearing the fields
const clearDetails = () => {setLabNo('');setBranchId('');setYearId('');setInvoiceData(null);setError(null);
  setInvDate('');setInvTime('');setPrefix('');setName('');setDay('');setMonth('');setYear('');setGender('');
setDob('');setPhone1('');setPhone2('');setEmail('');setNationality('');setAddress('');setRefBy(''); setOutDr('');
setPassport('');setSrfNo('');setBranch(''); setAadhar(''); setWardNo('');setIpOpNo('');setCollMode('');setCollBy('');
setReportOn('');setReportRequestedThrough({ personally: false,courier: false,email: false, sms: false,
  phone: false,
  });setReport({ urgentwork: false });setNotes('');
};
// Event handler for "NEW" button click
const handleNewButtonClick = () => {
  clearDetails();
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
          <Button variant="contained" color="primary" className="navbar-button" onClick={handleNewButtonClick}>NEW</Button>
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
            {/* <Grid item xs={12} sm={6}>
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
            </Grid> */}
            <Grid item xs={12} sm={6}>
            <TextField
  id="dateTime"
  label="Date/Time"
  variant="outlined"
  size="small"
  fullWidth
  value={`${invDate} ${invTime}`}
  onChange={(e) => {
    const value = e.target.value.trim(); // Trim any leading or trailing spaces
    console.log('Value before split:', value);
    
    // Split by space or comma followed by space
    const [date, time] = value.split(/\s*,\s*|\s+/);
    
    // Check if both date and time parts exist
    if (date && time) {
      console.log('Date:', date, 'Time:', time);
      setInvDate(date);
      setInvTime(time);
    } else {
      // Handle invalid input or missing parts
      console.log('Invalid DateTime format');
      // Optionally, you can set defaults or show an error message to the user
    }
  }}
  
  InputLabelProps={{ style: { fontSize: '14px' } }}
/>
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
        options={searchResultsRefBy.map((result) => result ? result.AhMst_pName : '')}
        value={refBy}
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
    options={searchResultsBranch.map((result) => result ? result.BrMst_Name : '')}
    value={branch}
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
          onBlur={handleAadharBlur}
          InputLabelProps={{ style: { fontSize: '14px' } }}
          error={!!errorAadhar}
          helperText={errorAadhar}
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
    options={searchResultsCollMode.filter(result => result).map(result => result.Mstr_Desc || '')}
    value={collMode}
    onInputChange={(event, newValue) => handleSearchChange('CollMode', newValue, setSearchResultsCollMode, setErrorCollMode)}
    onChange={handleCollModeChange}
    renderInput={(params) => (
      <TextField
        {...params}
        id="collMode"
        label="Coll Mode"
        variant="outlined"
        size="small"
        fullWidth
        error={!!errorCollMode}
        helperText={errorCollMode}
        InputLabelProps={{ style: { fontSize: '14px' } }}
      />
    )}
  />
</Grid>

          <Grid item xs={12} sm={6}>
        <Autocomplete
          freeSolo
          options={searchResultsCollBy.map((result) => result ? result.AhMst_pName : '')}
          value={collBy}
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
      </Grid>
          </Grid>
        </Box>
      )}
       {invoiceData && (
      <Box className="fieldset">
      <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
      <TextField
        id="sampleOn"
        label="Sample On"
        variant="outlined"
        size="small"
        fullWidth
          //  type="datetime-local"
        value={smplDate}
        onChange={handleSmplDateChange}
        InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
      />
      </Grid>
<Grid item xs={12} sm={6}>
<TextField
        id="reportTime"
        label="Report Time"
        variant="outlined"
        size="small"
        fullWidth
        // type="date"
        value={repTime}
        onChange={handleRepTimeChange}
        InputLabelProps={{ shrink: true, style: { fontSize: '14px' } }}
      />
</Grid>

        <Grid item xs={12}>
      <FormControl component="fieldset">
        <Typography variant="body1" gutterBottom>Report Requested Through</Typography>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.personally} onChange={handleCheckboxChange} name="personally" />}
            label="Personally"
          />
           <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.courier} onChange={handleCheckboxChange} name="courier" />}
            label="Courier"
          />
          <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.phone} onChange={handleCheckboxChange} name="phone" />}
            label="phone"
          />
         
          <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.email} onChange={handleCheckboxChange} name="email" />}
            label="Email"
          />
          <FormControlLabel
            control={<Checkbox checked={reportRequestedThrough.sms} onChange={handleCheckboxChange} name="sms" />}
            label="SMS"
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
                    control={<Checkbox checked={report.urgentwork}  name="urgentwork" />}
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
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                InputLabelProps={{ style: { fontSize: '14px' } }}
              />
            </Grid>
         
          </Grid>
        </Box>
      )}
      <ToastContainer />
    </Box>
  );
}

export default Edit;
  
