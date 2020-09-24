import express from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import multer from 'multer';
import multerConfig from './config/multer';
import {celebrate, Joi} from 'celebrate'

const routes=express.Router();
const upload =multer(multerConfig);

const pointsController= new PointsController();
const itemsController= new ItemsController();
//lista todos itens
routes.get('/items', itemsController.index);
//lista somente 1
routes.get('/points/:id', pointsController.show);
//listar pontos com filtros
routes.get('/points', pointsController.index);

//cadastra points e items_points precisa do upload de imagens
routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body:Joi.object().keys({
            name:Joi.string().required(),
            email:Joi.string().required().email(),
            whatsapp:Joi.number().required(),
            latitude:Joi.number().required(),
            longitude:Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items:Joi.string().required()
        })
    },{
        abortEarly:false
    }),
    pointsController.create
    );



export default routes;

/*
const users=[

    'Maria',
    'José',
    'João'

];

routes.get('/users',(request, response) => {

    const search=String(request.query.search);

    const filteredUsers= search ? users.filter(user => user.includes(search)): users;

    // JSON

    return response.json(filteredUsers);
});

//dois pontos é o que indica parametro
routes.get('users/:id',  (request, response)=>{

    const id=Number(request.parms.id);
    const user= users[id];
    return response.json(user);

})

routes.post('/users', (request, response)=>{

const data=request.body;

const user={
    name:data.name,
    email:data.email
};

    return response.json(user);

});
*/