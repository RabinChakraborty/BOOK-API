/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';
export interface Book extends Document {
  readonly name: string;
  readonly author: string;
  readonly price: number;
  readonly image_url: string;
}
