import React, { useState } from 'react';

import {Box, Container, TextField, Button} from '@mui/material';

//axios middleware
import axiosinterceptor from '../api/axiosInterceptor';

//importing formvalidation function
import userFormValidation from '../utilities/userFormValidation';

function Dashboard() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [place,setPlace] = useState('');
    const [error,setError] = useState({});

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try{
            const {errorValidation, formData} = userFormValidation(name, email, place);
            setError(errorValidation)   
            if(Object.keys(errorValidation).length === 0){
                //submit form
                const response = await axiosinterceptor.post('/api/users', formData);
                console.log('Form submitted successfully:', response.data);
                //clear form
                setName('');
                setEmail('');
                setPlace('');
            }            
        }catch(err){
            console.log('Error submitting form:', err);
        }
    }

  return (
    <Box width="100%" height="90vh">
        <Container maxWidth="xl">
            <Box component="form" onSubmit={handleSubmitForm} borderRadius={2} sx={{bgcolor: "secondary.light", border:"1px solid #ecd1bf"}} p={2} mt={2} display="flex" gap={2}>
                <TextField value={name} error={!!error.name} helperText={error.name} label="Name"  sx={{flex:1}} onChange={e => {
                    setName(e.target.value)
                    if(e.target.value.length >=3 ){
                        setError(prev => ({...prev, name: null}))
                    }
                }}/>
                <TextField value={email} error={!!error.email} helperText={error.email} label="Email" sx={{flex:1}} onChange={e => {
                    setEmail(e.target.value)
                    if(error.email){
                        setError(prev => ({...prev, email: null}))
                    }
                }}/>
                <TextField value={place} error={!!error.place} helperText={error.place} label="Place" sx={{flex:1}} onChange={e => {
                    setPlace(e.target.value)
                    if(error.place){
                        setError(prev => ({...prev, place: null}))
                    }
                }}/>                    
                <Button type='submit' sx={{flex:1}} variant="contained" color="primary">Add</Button>                     
            </Box>
        </Container>
    </Box>
  )
}

export default Dashboard