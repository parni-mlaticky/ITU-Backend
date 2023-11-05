const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const standingOrderSchema = new mongoose.Schema(
  {
    //   accountFrom: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'User',
    //     required: true,
    //   },
    accountTo: {
      prefix: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      bankCode: {
        type: String,
        required: true,
      },
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: false,
    },
    variableSymbol: String,
    messageForRecipient: String,
    constantSymbol: String,
    specificSymbol: String,
    messageForUser: String,
    name: {
      type: String,
      required: true,
    },
    paymentFrequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
      required: true,
    },
    firstPaymentDate: {
      type: Date,
      required: true,
    },
    endDate: Date, // Can be null for unlimited
  },
  {
    timestamps: true,
  }
);

standingOrderSchema.plugin(toJSON);

const StandingOrder = mongoose.model('StandingOrder', standingOrderSchema);

const sampleDataArray = [
  {
    accountTo: {
      prefix: '123',
      number: '456789',
      bankCode: '001',
    },
    amount: 1000,
    currency: 'USD',
    dueDate: new Date('2023-12-01'),
    name: 'Sample Standing Order 1',
    paymentFrequency: 'monthly',
    firstPaymentDate: new Date('2023-01-01'),
  },
  {
    accountTo: {
      prefix: '123',
      number: '456789',
      bankCode: '001',
    },
    amount: 100000,
    currency: 'USD',
    dueDate: new Date('2023-12-01'),
    name: 'Sample Standing Order 2',
    paymentFrequency: 'monthly',
    firstPaymentDate: new Date('2023-01-01'),
  },
];

StandingOrder.deleteMany({}, (err) => {
    if (err) return console.error(err);
    console.log('deleted');
});

StandingOrder.insertMany(sampleDataArray, (err, docs) => {
  if (err) return console.error(err);
  console.log('yay');
});

module.exports = StandingOrder;
