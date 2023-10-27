import { BaseModel } from './BaseModel';

export interface User {
  name?: string;
  age?: number;
  sex?: '男'|'女';
  address?: string;
}

export type UserModel = BaseModel<User[]>