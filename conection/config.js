// Datos de conexión del servidor MS SQL
const config = {
    'user': 'sa',
    'password': 'reallyStrongPwd123',
    'server': 'localhost',
    'database': 'RMSHQ',
    'options': {
        'encrypt': true,
        'enableArithAbort': true
        },
}

module.exports = config;