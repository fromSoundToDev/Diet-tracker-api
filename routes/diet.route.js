import Router from 'express';
import { allDiets, createDiet, deleteDiet, singleDiet, updateDiet } from '../controllers/deit.controller.js';

const dietRouter = Router();

// get all diets
dietRouter.get('/diets', allDiets);

// get a sigle diet
dietRouter.get('/single-diet/:id',singleDiet);

// create a diet 
dietRouter.post('/create-diet',createDiet);

// update diet 
dietRouter.put('/update-diet/:id', updateDiet);

// delete diet
dietRouter.delete('/delete-diet/:id',deleteDiet );

export default dietRouter