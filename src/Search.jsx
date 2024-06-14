import React, { useState } from 'react';
import axios from 'axios';
import { Grid, TextField, Autocomplete } from '@mui/material';

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [refBy, setRefBy] = useState('');
  const [branch, setBranch] = useState('')

  const fetchSearchResults = async (searchType, value) => {
    try {
      const response = await axios.get(`http://172.16.16.10:8082/api/SearchMaster`, {
        params: {
          SrchItem: searchType,
          SrchVal: value
        }
      });
      return response.data.brnchDetails;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch search results');
    }
  };

  const handleSearchChange = async (searchType, value) => {
    try {
      const results = await fetchSearchResults(searchType, value);
      setSearchResults(results);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid item xs={12} sm={6}>
      <Autocomplete
        freeSolo
        options={searchResults.map((result) => result.BrMst_Name)}
        onInputChange={(event, newValue) => handleSearchChange('Branch', newValue)}
        onChange={(event, newValue) => setBranch(newValue)} // Update the state with the selected value
        renderInput={(params) => (
          <TextField
            {...params}
            id="branch"
            label="Branch"
            variant="outlined"
            size="small"
            fullWidth
            error={!!error}
            helperText={error}
            InputLabelProps={{ style: { fontSize: '14px' } }}
          />
        )}
      />
    </Grid>
  );
}

export default Search;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Grid, TextField, Autocomplete } from '@mui/material';

// function Search() {
//   const [searchResultsRefBy, setSearchResultsRefBy] = useState([]);
//   const [searchResultsCollBy, setSearchResultsCollBy] = useState([]);
//   const [errorRefBy, setErrorRefBy] = useState(null);
//   const [errorCollBy, setErrorCollBy] = useState(null);
//   const [selectedRefByKey, setSelectedRefByKey] = useState('');
//   const [selectedCollByKey, setSelectedCollByKey] = useState('');
//   const [refBy, setRefBy] = useState('');
//   const [collBy, setCollBy] = useState('');

//   const fetchSearchResults = async (searchType, value) => {
//     try {
//       const response = await axios.get(`http://172.16.16.10:8082/api/SearchMaster`, {
//         params: {
//           SrchItem: searchType,
//           SrchVal: value
//         }
//       });
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message || 'Failed to fetch search results');
//     }
//   };

//   const handleSearchChange = async (searchType, value, setSearchResults, setError) => {
//     try {
//       const results = await fetchSearchResults(searchType, value);
//       switch (searchType) {
//         case 'RefBy':
//           // Sort the results alphabetically by the AhMst_pName property
//           results.refByDetails.sort((a, b) => {
//             // Convert names to lowercase and trim leading/trailing spaces
//             const nameA = a.AhMst_pName.trim().toLowerCase();
//             const nameB = b.AhMst_pName.trim().toLowerCase();
//             // Compare the names using localeCompare() for proper alphabetical sorting
//             return nameA.localeCompare(nameB);
//           });
//           setSearchResults(results.refByDetails);
//           setError(null);
//           break;
//         case 'CollBy':
//           // Sort the results alphabetically by the AhMst_pName property
//           results.collByDetails.sort((a, b) => {
//             // Convert names to lowercase and trim leading/trailing spaces
//             const nameA = a.AhMst_pName.trim().toLowerCase();
//             const nameB = b.AhMst_pName.trim().toLowerCase();
//             // Compare the names using localeCompare() for proper alphabetical sorting
//             return nameA.localeCompare(nameB);
//           });
//           setSearchResults(results.collByDetails);
//           setError(null);
//           break;
//         default:
//           break;
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };
  
//   const handleRefByChange = (event, newValue) => {
//     if (newValue) {
//       const selectedRefBy = searchResultsRefBy.find(result => result.AhMst_pName === newValue);
//       if (selectedRefBy) {
//         setSelectedRefByKey(selectedRefBy.AhMst_Key);
//       }
//     }
//     setRefBy(newValue);
//   };

//   const handleCollByChange = (event, newValue) => {
//     if (newValue) {
//       const selectedCollBy = searchResultsCollBy.find(result => result.AhMst_pName === newValue);
//       if (selectedCollBy) {
//         setSelectedCollByKey(selectedCollBy.AhMst_Key);
//       }
//     }
//     setCollBy(newValue);
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6}>
//         <Autocomplete
//           freeSolo
//           options={searchResultsRefBy.map((result) => result.AhMst_pName)}
//           onInputChange={(event, newValue) => handleSearchChange('RefBy', newValue, setSearchResultsRefBy, setErrorRefBy)}
//           onChange={handleRefByChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               id="refBy"
//               label="Ref By"
//               variant="outlined"
//               size="small"
//               fullWidth
//               error={!!errorRefBy}
//               helperText={errorRefBy}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           )}
//         />
//         <input type="hidden" id="selectedRefByKey" value={selectedRefByKey} />
//       </Grid>

//       <Grid item xs={12} sm={6}>
//         <Autocomplete
//           freeSolo
//           options={searchResultsCollBy.map((result) => result.AhMst_pName)}
//           onInputChange={(event, newValue) => handleSearchChange('CollBy', newValue, setSearchResultsCollBy, setErrorCollBy)}
//           onChange={handleCollByChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               id="collBy"
//               label="Coll By"
//               variant="outlined"
//               size="small"
//               fullWidth
//               error={!!errorCollBy}
//               helperText={errorCollBy}
//               InputLabelProps={{ style: { fontSize: '14px' } }}
//             />
//           )}
//         />
//         <input type="hidden" id="selectedCollByKey" value={selectedCollByKey} />
//       </Grid>
//     </Grid>
//   );
// }

// export default Search;

