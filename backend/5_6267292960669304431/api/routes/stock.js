const express = require( 'express');
const router  = express.Router();
const {QueryCall} = require('./functions/databaseFunctions.js')


router.get('/' , (req,res,next)=>{
    const query = `SELECT id, budget_fund_scheme, full_name, department, mainhead, subhead, total, balance, amount, to_whom, cb_number, voucher_numer, description
	FROM public.stock_table;`;
    QueryCall(res, query);
})

router.post('/' , (req,res,next)=>{
    const data=req.body ;
    const query = `INSERT INTO public.stock_table(
        budget_fund_scheme, full_name, department, mainhead, subhead, total, balance, amount, to_whom, cb_number, voucher_numer, description)
        VALUES( '${data.budget_fund_scheme}' , '${data.full_name}', '${data.department}', '${data.mainhead}', '${data.subhead}', ${data.total}, ${data.balance}, ${data.amount}, '${data.to_whom}', '${data.cb_number}', '${data.voucher_numer}', '${data.description}');`;
    QueryCall(res, query);    
})


router.get('/:orderId' , (req,res,next)=>{
    const orderId = req.params.orderId;
    res.status(200).json({
        "message":"get order id : "+orderId
    })
} )


module.exports = router;