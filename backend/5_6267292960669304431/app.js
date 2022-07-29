const express = require('express');
const app = express();

// Importing cors to handle error
const cors = require('cors');
// Importing cors to handle error

const bodyParser = require('body-parser');

const orderRoutes = require('./api/routes/order');
const stockRoutes   = require('./api/routes/stock');


// BODY PARSER START

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// BODY PARSER END


// CORS ERROR HANDLING START
app.use(cors())
// CORS ERROR HANDLING END



app.use('/order' ,  orderRoutes );

// app.use('/order' ,  orderRoutes ); if there is any request with /order 
// app.use will reroute it to the orderRoutes

app.use('/stock' ,  stockRoutes );
// app.use('/stock' ,  stockRoutes ); if there is any request with /stock 
// app.use will reroute it to the stockRoutes



// ERROR HANDLING SECTION START
app.use( (req,res,next) =>{
    // if none of the above lines are called 
    // that is :
    // if /order is not called or /stock is not called 
    // or simply we send a request like this : localhost:4000/ 
    // this code is executed .
    const error = new Error('Not Found');
    error.status = (404);
    next(error);
})

app.use(( error , req , res , next )=>{
    // if there is any problems with the code 
    // or if there is a problem with database fetching 
    // this function is called

    res.status( error.status || 500 );
    res.json({
        error:{
            "message":error.message
        }
    })
})
// ERROR HANDLING SECTION END


module.exports = app;
