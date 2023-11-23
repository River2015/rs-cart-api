import { Module } from '@nestjs/common';

import { OrderModule } from '../order/order.module';
import { DBModule } from 'src/db.module';

import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ OrderModule, DBModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
