import express from 'express';
import PointsController from '../controllers/PointsController';
import ItemsController from '../controllers/ItemsController';

const router = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

router.get('/items', itemsController.index);

router.get('/points/:id', pointsController.show);
router.post('/points', pointsController.create);
router.get('/points', pointsController.index);

export default router;
