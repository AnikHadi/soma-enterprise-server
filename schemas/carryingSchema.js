const mongoose = require("mongoose");

const carringSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  po_no: {
    type: String,
    required: true,
  },
  lc_no: {
    type: String,
    required: true,
  },
  lc_date: {
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
  carry_bill: {
    type: String,
    required: true,
  },
  unload_bill: {
    type: String,
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

module.exports = carringSchema;


