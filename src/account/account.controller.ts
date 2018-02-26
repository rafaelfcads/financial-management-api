import { Controller, Res, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Res() res, @Body() account: {}) {
    this.accountService.create(account);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async findAll(@Res() res): Promise<Account[]> {
    const accounts = await this.accountService.findAll();
    return res.status(HttpStatus.OK).json(accounts);
  }

  @Get(':name')
  async findByName(@Res() res, @Param() params): Promise<Account[]> {
    const account = await this.accountService.findByName(params.name);
    return res.status(HttpStatus.OK).json(account);
  }
}