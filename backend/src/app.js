const express = require('express');

const cors = require('cors');

const routes =  require('./routes');

class App {


    constructor() {

        this.express = express();
        this.middlewares();
        this.routes();
        
        this.handlers();
       


    }


    routes() {
        this.express.use(express.json());
        this.express.use(routes);
    }

    middlewares() {
        this.express.use(cors());
    }


    handlers() {

    }

}
module.exports = new App().express;