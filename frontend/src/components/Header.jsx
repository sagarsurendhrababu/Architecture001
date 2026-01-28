import React from 'react';

import {Box,Grid, Typography, Button, TextField} from '@mui/material';
//link from router dom
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilter, setPage } from '../redux/features/userSlice.js';

function Header() {

  const dispatch = useDispatch();

  return (
    <Box width="100%" height="60px" bgcolor="primary.main">
        <Grid container height="100%" px={3}>
            <Grid size={{xs:4, md:2}} display="flex" alignItems="center" >
              <Typography variant='h2'>Logo</Typography>
            </Grid>
            <Grid size={{xs:4, md:5}} display="flex" alignItems="center" justifyContent="center">
              <Box width="100%" display="flex" justifyContent="center">
                <TextField onChange={(e) =>  {
                  dispatch(setFilter(e.target.value));
                  dispatch(setPage(1));
                }} fullWidth placeholder="Search..."></TextField>
              </Box>
            </Grid>
            <Grid size={{xs:4, md:5}} sx={{justifyContent: {xs: "flex-end", md: "flex-end"}}} display="flex" alignItems="center" >
                <Box gap={2} display="flex" >
                  <Button component={Link} to="/" variant="contained" sx={{bgcolor: "secondary.main"}}>Home</Button>
                  <Button component={Link} to="/login" variant='contained' sx={{bgcolor: "secondary.main"}}>Login</Button>
                </Box>
            </Grid>
        </Grid> 
    </Box>
  )
}

export default Header