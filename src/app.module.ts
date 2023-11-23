import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';
import { DBModule } from './db.module';
import { DBService } from './db.service';

@Module({
  imports: [
    AuthModule,
    CartModule,
    OrderModule,
    UsersModule, DBModule
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
