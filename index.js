console.log('Hello World!')
const express = require('express')
require('dotenv').config()
const {dbConnection} = require('./database/config')
//Crear App Express
const app = express()
app.use(express.json)
app.use( express.static('public') )

//Base de datos
dbConnection();

//Rutas
app.get('/api/auth', require ('./routes/auth'))

app.post('/api/auth/register', require ('./routes/auth'))


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
}
)


