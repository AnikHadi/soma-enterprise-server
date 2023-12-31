const mongoose = require("mongoose");

const nocSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  po_no: {
    type: String,
    required: true,
  },
  file_no: {
    type: String,
    required: true,
  },
  file_submit_date: {
    type: String,
    required: true,
  },
  lca_no: {
    type: String,
    required: true,
  },
  lca_date: {
    type: String,
    required: true,
  },
  invoice_no: {
    type: String,
    required: true,
  },
  invoice_date: {
    type: String,
    required: true,
  },
  bill_no: {
    type: String,
    required: true,
  },
  bill_date: {
    type: String,
    required: true,
  },
  bl_no: {
    type: String,
    required: true,
  },
  bl_date: {
    type: String,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  bill_amount: {
    type: Number,
    required: true,
  },
  submit_place: {
    type: String,
    required: true,
  },
  pay_date: {
    type: String,
    // required: true,
  },
  bank_name: {
    type: String,
    // required: true,
  },
  is_paid: {
    type: String,
    // required: true,
  },
});

module.exports = nocSchema;


