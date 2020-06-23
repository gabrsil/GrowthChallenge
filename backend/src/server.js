require('dotenv').config();
const app = require('./app');




app.listen(process.env.PORT || 3333, () => {
    console.log(`Server started on ${process.env.PORT}.`);
})

