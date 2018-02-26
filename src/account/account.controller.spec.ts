import "mocha";
import * as chai from "chai";
import * as sinon from "sinon";

import { Model } from 'mongoose';
 
import { AccountController } from "./account.controller";
import { AccountService } from './account.service';
 
const expect = chai.expect;
const should = chai.should();
 
describe("#Account", () => {
    it("#should return all accounts", async () => {
        
        const accountModel: Model<Account> = {
            findAll: () => {}
        };
        const modelFindAll = sinon.stub(accountModel, "findAll").returns([]);

        const accountService = new AccountService(accountModel);
        const findAll = sinon.stub(accountService, "findAll").returns([{'name': 'Rafael'}]);
        
        const accountController: AccountController = new AccountController(accountService);
 
        const res: {} = {
            status: () => {
                return  { json: (account) => account }
            },
        };
        const accounts = await accountController.findAll(res);

        accounts[0].should.have.property('name');

    });
});