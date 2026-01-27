import React, { useEffect, useState, useMemo } from 'react';

import {Box, Container, TextField, Button} from '@mui/material';

//importing formvalidation function
import userFormValidation from '../utilities/userFormValidation';
//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import {createUserStart, fetchUserStart,  deleteUserStart, setPage } from '../redux/features/userSlice';
//import skeleton
import SkeletonArea from '../customHooks/SkeletonArea.jsx';

function Dashboard() {

    const [name,setName]   = useState('');
    const [email,setEmail] = useState('');
    const [place,setPlace] = useState('');
    const [error,setError] = useState({});

    const userData      = useSelector(state => state.users.users);
    const countUsers    = useSelector(state => state.users.totalUsers); 
    const limit         = useSelector(state => state.users.limit); 
    const page          = useSelector(state => state.users.page); 
    const loading       = useSelector(state => state.users.load);   
    const errorState    = useSelector(state => state.users.error);
    const dispatch      = useDispatch();

    const totalPage = useMemo(() => {
        return Math.ceil(countUsers / limit);
    }, [countUsers, limit]); 
    
    //creating user data
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const {errorValidation, formData} = userFormValidation(name, email, place);
        setError(errorValidation) 
            if(Object.keys(errorValidation).length === 0){
            dispatch(createUserStart(formData));               
            setName(''); setEmail(''); setPlace('');
        }            
    }

    //fetching user data
    useEffect(() => {        
      dispatch(fetchUserStart({page,limit}));
    }, [dispatch,page,limit]);

  return (
    <Box width="100%" minHeight="90vh" pb={3}>
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
                <Button type='submit' sx={{flex:1}} variant="contained" color="primary">{ loading ? "Saving.." : "Save"}</Button>                     
            </Box>

            {loading && <SkeletonArea/>}
            {errorState && <Box mt={2} color="error.main">{errorState}</Box>}
            
            {userData && userData.map((user, index) => (
                <Box key={index} mt={2} p={2} borderRadius={2} sx={{bgcolor: "primary.light", border:"1px solid #aec4c5", display:"flex", justifyContent:"space-between", alignItems:"center"
                }}>
                    <Box><strong>Name:</strong> {user.name}</Box>
                    <Box><strong>Email:</strong> {user.email}</Box>
                    <Box><strong>Place:</strong> {user.place}</Box>
                    <Button onClick={() => dispatch(deleteUserStart(user._id))} variant="contained" color="error">delete</Button>
                </Box>
            ))}

            <Box sx={{my:2, display:"flex", gap:1, justifyContent:"center", flexWrap:"wrap"}}>
                {totalPage > 0 && [...Array(totalPage)].map((_, index) => (
                    <Button key={index} onClick={() => dispatch(setPage(index + 1))} variant={page === index + 1 ? "contained" : "outlined"} color="primary">
                        {index + 1}
                    </Button>
                ))}
            </Box>

        </Container>
    </Box>
  )
}

export default Dashboard