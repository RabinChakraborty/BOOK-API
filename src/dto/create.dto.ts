/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly author: string;
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
  @IsString()
  @IsNotEmpty()
  readonly image_url: string;
}
