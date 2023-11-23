import { Module } from '@nestjs/common';
import { DBModule } from 'src/db.module';
import { UsersController } from './services/users.controller';
import { UsersService } from './services';

@Module({
  imports: [DBModule],
  providers: [ UsersService ],
  exports: [ UsersService ],
  controllers: [UsersController],
})
export class UsersModule {}
