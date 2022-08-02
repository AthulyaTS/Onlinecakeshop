// POSTGRES START
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cakeshopdb',
    password: 'malu',
    port: 5432,
})
// POSTGRES END


const QueryCall = (res, query)=>{
    pool.query(query, (error, results) => {
        if (error)  {
            res.status(400).send(`${error}`) 
        }
        else {
            res.status(201).send(results.rows)
        }
    })
}


module.exports= {
    QueryCall
}