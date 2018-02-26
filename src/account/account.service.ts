import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Account } from './account';
import { AccountSchema } from './account.schema';

@Component()
export class AccountService {
  constructor(@InjectModel(AccountSchema) private readonly accountModel: Model<Account>) {}

  async create(account: {}): Promise<Account> {
    const createdAccount = new this.accountModel(account);
    return await this.accountModel.findOneAndUpdate({ name: account.name } , account, { upsert: true });
  }

  async findAll(): Promise<Account[]> {
    return await this.accountModel.find().exec();
  }

  async findByName(name: String): Promise<Account[]> {
    return await this.accountModel.findOne({ 'name': name }).exec();
  }
}