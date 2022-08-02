const express = require( 'express');
const router  = express.Router();
const {QueryCall} = require('./functions/databaseFunctions.js')


router.get('/' , (req,res,next)=>{
    const query = `SELECT * FROM public.products;`;
    QueryCall(res, query);
})

router.patch('/' , (req,res,next)=>{
    const data=req.body;
    const query =   ` UPDATE public.products
	SET  pname='${data.pname}', price=${data.price}, status='${data.status}'
	WHERE id=1; `;
    QueryCall(res, query);    
})

router.post('/' , (req , res , next ) =>{
    const data=req.body ;
    const query = `INSERT INTO public.products(
       pname, price, status)
        VALUES ('${data.pname}' ,'${data.price}' ,'${data.status}' );`;
    QueryCall(res, query);
});

router.get('/:Id' , (req,res,next)=>{
    const orderId = req.params.orderId;
    res.status(200).json({
        "message":"get order id : "+Id
    })
} )


module.exports = router;