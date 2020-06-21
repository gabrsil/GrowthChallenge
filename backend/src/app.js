const express = require('express');

const cors = require('cors');

const routes =  require('./routes');

class App {


    constructor() {

        this.express = express();
        this.routes();
        this.handlers();



    }


    routes() {
        this.express.use(routes);
    }


    handlers() {

    }

}
module.exports = new App().express;