const sql = require('mssql');
const config = require('./conection/config');

sql.connect(config, err => {
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query('SELECT count(*) FROM Item;', (err, result) => {
        //handle err
        console.dir(result)
        // This example uses callbacks strategy for getting results.
    });

});

// sql.on('error', err => {
//     // ... error handler
//     console.log("Sql database connection error " ,err);

// })

// const sql = require('mssql')

// async () => {
//     try {
//         console.log(`1`);
//         await sql.connect('mssql://sa:reallyStrongPwd123@localhost/RMSHQ');

//         console.log(`aqui`);
//         const result = await sql.query`SELECT count(*) FROM Item;`
//         console.dir(result)

//     } catch (err) {
//         console.log(`Error`);
//         console.log(err);
//     }

// }