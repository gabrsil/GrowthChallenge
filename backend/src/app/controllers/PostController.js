const connection = require('../../database/connections');
const axios = require('axios');

class PostController {

    async index() {

    }


    async store() {




    }
    
    async update() {



    }



    async fetchPostApiAndSave(request, response) {

        let post;

        await axios
        .get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
       
            post = response.data;
        }, (err) => {
            console.log(err)
        });

        return response.status(200).json({
            post
        })

    }


}

module.exports = new PostController();