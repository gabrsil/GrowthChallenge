const axios = require('axios');
const connection = require('../../database/connections');

class UserController {

    async index(request, response) {

        


        

    }


    async store() {



    }
    
    async fetchUserApiAndSave(req, resp) {
        
        let user;
        let adress;

        await axios
        .get('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
         
            
            const users = response.data;

            users.forEach( async (user) => {


                const exists = await connection('user')
                .where('id', user.id)
                .select('id')
                .first();

                if(exists) {
                    return;
                }

                const respCompany = await connection('company')
                .insert({
                    name: user.company.name,
                    catchPhrase: user.company.catchPhrase,
                    bs: user.company.bs
                })

               
                const respAddress = await connection('address')
                .insert({
                            street: user.address.street,
                            suite: user.address.suite,
                            city: user.address.city,
                            zipcode: user.address.zipcode,
                            latitude: user.address.geo.lat,
                            longitude: user.address.geo.lng
                    // })
                })

 
                

                const respUser = await connection('user')
                .insert({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    website: user.website,
                    address_id: respAddress[0],
                    company_id: respCompany[0],
                })

                console.log(respUser)

            });


        }, (err) => {
            console.log(err)
        });

  
        return resp.status(200).json({
            sucess: true
        })

    }


}

module.exports = new UserController(); 