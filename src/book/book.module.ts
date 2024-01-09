/* eslint-disable prettier/prettier */
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppModule } from 'src/app.module';
import { BookController } from 'src/books/books.controller';
import { BookService } from 'src/books/books.service';
import { BookSchema, Books } from 'src/schema/schema.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rabin747809:SGr3GNf2nKDMICkL@cluster0.9gi5042.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: Books.name, schema: BookSchema }]),
    forwardRef(() => AppModule),
  ],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
