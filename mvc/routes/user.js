const express = require('express')

const router=express.Router()


router.get('/', async (req, res) => {
    const alldbusers = await User.find({});
    return res.json(alldbusers)
})

router.get("/:id", (req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id === id)
    return res.json(user)
})

router.post('/', async (req, res) => {
    //to  do
    const body = req.body

    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender
    })
    console.log("yaha tak execute hua h")
    console.log(result)
    return res.status(201).json({ msg: "All ok" })
})
router.patch("/:id", (req, res) => {
    //to  do
    return res.json({ status: 'pending' })
})
router.delete("/:id", (req, res) => {
    //to  do
    return res.json({ status: 'pending' })
})

module.exports=router