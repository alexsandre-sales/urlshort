import { config } from '../config/Constante';
import mongoose from 'mongoose';

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_CONNECTION);
      console.log('Mongo Atlas conectado');
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
}
