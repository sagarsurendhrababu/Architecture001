const express = require('express');
const router = express.Router();

const userModel = require('../Models/userModel');

// Get all users
router.get('/api/users', async (req, res) => {
    const { page, limit, filter } = req.query;
    try {
        const filterResult = filter
            ? {
                $or: [
                    { name: { $regex: filter, $options: 'i' } },
                    { email: { $regex: filter, $options: 'i' } },
                    { place: { $regex: filter, $options: 'i' } }
                ]
            }
            : {};
                  
        const users = await userModel
            .find(filterResult)
            .sort({ _id: -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const totalUsers = await userModel.countDocuments(filterResult);
        res.status(200).json({ users, totalUsers });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Create a new user
router.post('/api/users', async (req, res) => {
    try{
        const {name,email,place} = req.body;
        const newUser = await userModel.create({name,email,place});
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).send('Server Error');
    }   
});


//put update user by id
router.put('/api/users/:id', async (req, res) => {
    try{
        const {name,email,password} = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            {name,email,password},
            {new:true}
        );
        res.json(updatedUser);
    }catch(error){
        res.status(500).send('Server Error');
    }   
});

//delete user by id
router.delete('/api/users/:id', async (req, res) => {
    try{
        await userModel.findByIdAndDelete(req.params.id);
        res.json({msg:'User Deleted'});
    }catch(error){
        res.status(500).send('Server Error');
    }   
});

module.exports = router;

