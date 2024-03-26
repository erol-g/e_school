const  login = ("/login",async(req,res)=>{

    console.log(req.body);


    res.json(req.body)

})
module.exports = {login}