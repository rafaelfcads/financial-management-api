import { Document } from 'mongoose';

export interface Account extends Document {
  readonly name: string;
  readonly balance: Number,
  readonly transactionDescription: String,
  readonly transactionValue: Number
}