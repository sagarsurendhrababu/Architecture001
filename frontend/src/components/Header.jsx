import React from 'react'

import {Box,Grid, Typography, Button} from '@mui/material';
//link from router dom
import {Link} from 'react-router-dom';

function Header() {
  return (
    <Box width="100%" height="60px" bgcolor="primary.main">
        <Grid container height="100%" px={3}>
            <Grid size={{xs:6, md:2}} display="flex" alignItems="center" >
              <Typography variant='h2'>Logo</Typography>
            </Grid>
            <Grid size={{xs:6, md:10}} sx={{justifyContent: {xs: "flex-end", md: "flex-end"}}} display="flex" alignItems="center" >
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