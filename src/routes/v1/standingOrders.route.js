const express = require('express');
const standingOrderController = require('../../controllers/standingOrder.controller');

const router = express.Router();

router.post('/', standingOrderController.createStandingOrder);
router.get('/:id', standingOrderController.getStandingOrderById);
router.get('/', standingOrderController.getAllStandingOrders);
router.put('/:id', standingOrderController.updateStandingOrder);
router.delete('/:id', standingOrderController.deleteStandingOrder);

module.exports = router;
