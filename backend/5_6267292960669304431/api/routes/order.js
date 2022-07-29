
const express = require( 'express');
const router  = express.Router();
// the above lines will give us the ability to 
// handle many routing features


const {QueryCall} = require('./functions/databaseFunctions.js')
//query call function is used to call postgres queries . 
// using that function the user only need to pass the corresponding query to the function as an argument . 


// the router.get will handle the get requests in the contingency.js ,
// it returns all rows in contingency table 
router.get('/' , async(req , res , next ) =>{
    try {
        const query = `SELECT id, user_full_name, user_full_address, user_phone, item_name, item_price, item_quantity, order_date
        FROM public.order_table;`;
        await QueryCall(res, query);
    } 
    catch (error) {
        console.log("here")
        res.status(400).send(`error: ${error}`) 
    }
});


// the below router `router.get('/:contingencyId' ...`
// will cath the get requests with a contingencyId given to it 
// this is used to return contingency row with id contingencyId
router.get('/:contingencyId' , async (req , res , next ) =>{
    try{
        const query = `SELECT id, user_full_name, user_full_address, user_phone, item_name, item_price, item_quantity, order_date
        FROM public.order_table WHERE id=${req.params.contingencyId}; `;
        await QueryCall(res, query);
    }
    catch(err){
        console.log("caatched")
        res.status(400).send(`error: ${error}`) 
    }
});


// the router.post will handle the post requests in the contingency.js ,
// used to post new rows to contingency table
router.post('/' , (req , res , next ) =>{
    const data=req.body ;
    const query = `INSERT INTO public.order_table(
        user_full_name, user_full_address, user_phone, item_name, item_price, item_quantity, order_date)
        VALUES ('${data.user_full_name}', '${data.user_full_address}', '${data.user_phone}', '${data.item_name}', '${data.item_price}', '${data.item_quantity}', '${data.order_date}');`;
    QueryCall(res, query);
});



module.exports = router;