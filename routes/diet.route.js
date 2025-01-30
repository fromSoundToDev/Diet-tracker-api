import Router from 'express';
import { allDiets, createDiet, deleteDiet, singleDiet, updateDiet } from '../controllers/deit.controller.js';

const dietRouter = Router();

// get all diets
dietRouter.get('/diets', allDiets);

// get a sigle diet
dietRouter.get('/diet/:id',singleDiet);

// create a diet 
dietRouter.post('diet',createDiet);

// update diet 
dietRouter.put('/diet/:id', updateDiet);

// delete diet
dietRouter.delete('diet/:id',deleteDiet );

export default dietRouter