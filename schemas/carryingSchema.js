const mongoose = require("mongoose");

const carringSchema = mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  po_no: {
    type: Array,
  },
  lc_no: {
    type: Array,
    required: true,
  },
  lc_date: {
    type: Array,
    required: true,
  },
  bill_entry_no: {
    type: Array,
    required: true,
  },
  bill_entry_date: {
    type: Array,
    required: true,
  },
  invoice_no: {
    type: Array,
    required: true,
  },
  invoice_date: {
    type: Array,
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
  },
  bank_name: {
    type: String,
  },
  is_paid: {
    type: String,
  },
});

module.exports = carringSchema;


