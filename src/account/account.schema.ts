import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  name: String,
  balance: Number,
  transactionDescription: String,
  transactionValue: Number
});