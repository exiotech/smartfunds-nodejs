import User from 'model/User';
import Driver from 'model/Driver';

export const STRATEGIES = ['user', 'driver', 'admin'];

export const STRATEGY_MODEL = {
  user: User,
  driver: Driver,
  admin: User
};
