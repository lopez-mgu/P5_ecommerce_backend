const express = require('express');
const router = express.Router();
const UserModel = require('../models/users');
const UserService = require('../services/users');

const userService = new UserService(UserModel);

router.get('/me', async (req, res) =>{
    const sessionUser = req.user;
    console.log('Session User', sessionUser, 'req.user', req.user)
    if (!sessionUser){
        return res.status(403).send({
            message: 'User not AUTHORIZED'
        })
    }

    res.send({
        username: sessionUser.username,
        email: sessionUser.email
    })
})


router.post('/', async(req, res) => {
    const body = req.body;
    const user = await userService.create(body);

    res.status(201).send(user);
})

module.exports = router;