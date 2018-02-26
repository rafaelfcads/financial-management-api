import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountSchema } from './account.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }])],
  controllers: [AccountController],
  components: [AccountService],
})
export class AccountModule {}
