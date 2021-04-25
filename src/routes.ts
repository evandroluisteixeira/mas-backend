import {request, Router} from 'express';

const routes = Router();

routes.get('/user' , (request, response) =>{
    const{nome, idade}=request.query;

    response.json({
        idade,
        nome, 
        message: "Idade e Nome"
    })

})

export default routes;
