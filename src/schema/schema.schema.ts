/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Books>;

@Schema()
export class Books {
  @Prop()
  name: string;
  @Prop()
  author: string;
  @Prop()
  price: number;
  @Prop()
  image_url: string;
  static title: string;
}

export const BookSchema = SchemaFactory.createForClass(Books);
