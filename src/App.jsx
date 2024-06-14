import { createTheme, ThemeProvider } from '@mui/material/styles';
import Invoice from './Invoice';
import Navbar from './Navbar';
import InvoiceData from './InvoiceData';
import SingleFieldFetch from './SingleFieldFetch';
import Swr from './Fetch';
import Fetch from './Fetch';
import Single from './Single';
import Search from './Search';
import Edit from './Edit';
import ParentComponent from './ParentComponent';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Custom primary color
    },
    secondary: {
      main: '#ff9800', // Custom secondary color
    },
    default: {
      main: '#9e9e9e', // Custom default color
    },
  },
});

function App() {
  return (
    <div className='app-container'>
      {/* <Navbar/> */}

    
    <ThemeProvider theme={theme}>
      {/* <ParentComponent/> */}
      <Edit/> 
      {/* <Search/>
      {/* <SingleFieldFetch/> */}
      {/* <Single/> */}
      {/* <InvoiceData/> */}
      {/* <Invoice /> */}
      {/* <Fetch/> */}
    </ThemeProvider>
    </div>
  );
}

export default App;
