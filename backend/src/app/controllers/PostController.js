const connection = require('../../database/connections');
const axios = require('axios');

class PostController {

    async index(request, response) {


        const posts = await connection('post')
        .select('*');


        return response.json({
            sucess: true,
            posts
        })

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

            const posts = response.data

                posts.forEach( async (post) => {
                    
                    const exists = await connection('post')
                    .where('id', post.id)
                    .first();

                    if(exists){
                        return;
                    }


                    const respPosts = await connection('post')
                    .insert({
                        user_id: post.userId,
                        title: post.title,
                        body: post.body
                    })
                
                    console.log(respPosts)


                })

             

        }, (err) => {
            console.log(err)
            return response
            .status(400)
            .json(err);
        });

        return response.status(200).json({
            sucess: true
        })

    }


}

module.exports = new PostController();