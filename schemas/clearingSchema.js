const mongoose = require("mongoose");

const clearingSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  po_no: {
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
  bill_entry_no: {
    type: String,
    required: true,
  },
  bill_entry_date: {
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
  musk_challan_no: {
    type: String,
    required: true,
  },
  musk_challan_date: {
    type: String,
    required: true,
  },
  bill_amount: {
    type: Number,
    required: true,
  },
  pay_date: {
    type: String,
    required: true,
  },
  bank_name: {
    type: String,
    required: true,
  },
  is_paid: {
    type: String,
    required: true,
  },
});

module.exports = clearingSchema;

