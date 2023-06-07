import express from 'express'
const router = express.Router()
import {saveOrder,allOrder} from '../controllers/OrderUser.js';

router.post('/order',saveOrder);
router.get('/order',allOrder);

export default router