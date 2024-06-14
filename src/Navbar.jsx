import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// import logo from './logo.png';

function Navbar() {
  return (
    <Box className="navbar" display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center">
        <img src="" alt="" className="logo" />
        <Typography variant="h6" component="span" className="title"><em>Edit Invoice</em></Typography>
      </Box>
      <IconButton color="default" className="close-button">
        <CloseIcon />
      </IconButton>
    </Box>
  );
}

export default Navbar;
