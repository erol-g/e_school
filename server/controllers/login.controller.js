// const { passControl } = require('../middlewares.js')

const  login = ("/login",async(req,res)=>{

    res.json(req.body)

})
module.exports = {login}