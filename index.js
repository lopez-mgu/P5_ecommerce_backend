const app = require('./src/app');

require('dotenv').config();
require ('./src/db/mongodb');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});



