const StandingOrder = require('../models/standingOrder.model');

const createStandingOrder = async (req, res) => {
  try {
    const standingOrder = new StandingOrder(req.body);
    await standingOrder.save();
    res.status(201).send(standingOrder);
  } catch (error) {
    console.log(error);
    console.log(req.body);
    res.status(400).send(error);
  }
};

const updateStandingOrder = async (req, res) => {
    try {
        const standingOrder = await StandingOrder.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        if (!standingOrder) {
            return res.status(404).send({ message: 'Standing order not found' });
        }
        res.send(standingOrder);
    } catch (error) {
        res.status(500).send(error);
    }
}

const getStandingOrderById = async (req, res) => {
  try {
    const standingOrder = await StandingOrder.findById(req.params.id);
    if (!standingOrder) {
      return res.staus(404).send({ message: 'Standing order not found' });
    }
    res.send(standingOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteStandingOrder = async (req, res) => {
    try {
        const standingOrder = await StandingOrder.findByIdAndDelete(req.params.id);
        if (!standingOrder) {
            return res.status(404).send({ message: 'Standing order not found' });
        }
        res.send(standingOrder);
    } catch (error) {
        console.log("Error deleting ", error);
        res.status(500).send(error);
    }
};


const getAllStandingOrders = async (req, res) => {
  try {
    const standingOrders = await StandingOrder.find({}, 'name');
    res.json(standingOrders);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching standing orders', error });
  }
};

module.exports = {
  createStandingOrder,
  updateStandingOrder,
  getStandingOrderById,
  deleteStandingOrder,
  getAllStandingOrders,
};
