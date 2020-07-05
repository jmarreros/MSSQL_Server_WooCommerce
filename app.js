const sql = require('mssql');
const config = require('./conection/config');

// Obtenemos los datos desde la base de datos MS SQL
const datosSQL = async () => {

    try {
        const cn = await sql.connect(config);
        const request = new sql.Request();
        const result = await request.query('SELEC TOP 100 id,price, WebItem FROM Item');

        cn.close();
        return result.recordset;
    }
    catch(err){
        throw new Error(err);
    }
}

datosSQL()
    .then(
        resp => console.log(resp)
    )
    .catch(err => {
        console.log("Existe un error : ", err);
    });
