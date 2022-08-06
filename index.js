const app = require('./src/app');

require('dotenv').config();
require ('./src/db/mongodb');

const PORT = process.env.PORTENV || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});



