const express = require('express');
const authRoutes = require('./routes/auth.route')
const passportSetup = require('./config/passport-setup')
const PORT = 4556

const app = express();
// console.log(app)
 
// set view engine
app.set('view engine', 'ejs')

//set auth router
app.use('/auth', authRoutes)

app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(PORT,()=>{
    console.log(`listening on https://localhost:${4556}`)
})