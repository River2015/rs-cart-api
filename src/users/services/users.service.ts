import { Injectable } from '@nestjs/common';
import { QueryResult } from 'pg';
import { DBService } from 'src/db.service';
import { User } from '../models';

@Injectable()
export class UsersService {
  private readonly users: Record<string, User>;

  constructor(private db: DBService) {
  }

  async findOne(userId: string): Promise<User> {
    const res = await this.db.runQuery<User>(
      `SELECT * FROM users WHERE id = '${userId}'`,
    );
    return res[0];
  }

  async getAllUsers(): Promise<User[]> {
    return await this.db.runQuery<User>('SELECT * FROM users');
  }

  async createOne({ name, email, password }: User): Promise<User> {
    const res = await this.db.runQuery<User>(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}') RETURNING id`,
    );
    return res[0];
  }

}
