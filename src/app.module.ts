import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/financial'),
    AccountModule
  ]
})
export class ApplicationModule {}
