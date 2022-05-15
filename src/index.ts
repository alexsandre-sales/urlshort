import express from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';
import 'dotenv/config';

const PORT = 3000;
const api = express();
const database = new MongoConnection();

database.connect();
api.use(express.json());
console.log(database.connect);

const urlController = new URLController();
api.post('/shorten', urlController.short);
api.get('/:hash', urlController.redirect);

api.listen(process.env.port || PORT, () => {
  console.log('Servidor OK');
});
