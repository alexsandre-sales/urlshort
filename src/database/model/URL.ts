import { getModelForClass, prop } from '@typegoose/typegoose';

export class URL {
  @prop({ required: true })
  hash: string;

  @prop({ required: true })
  shortURL: string;

  @prop({ required: true })
  URLOrigin: string;
}

export const URLModel = getModelForClass(URL);
