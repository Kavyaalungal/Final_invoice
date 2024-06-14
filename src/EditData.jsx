import React, { useState, useEffect } from 'react';
import { TextField, Grid, Box } from '@mui/material';

function EditData({ invoiceData, onChange }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    setName(invoiceData?.Inv_name || '');
    setEmail(invoiceData?.Inv_Email || '');
  }, [invoiceData]);

  useEffect(() => {
    onChange({ ...invoiceData, Inv_name: name, Inv_Email: email });
  }, [name, email]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(validateEmail(newEmail));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Box className="fieldset">
      <Grid container spacing={3} alignItems="center">
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
        <Grid item xs={12} sm={10}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            InputLabelProps={{ style: { fontSize: '14px' } }}
            error={!isEmailValid}
            helperText={!isEmailValid ? "Invalid email address" : ""}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default EditData;
