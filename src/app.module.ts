/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BookSchema, Books } from './schema/schema.schema';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   'mongodb+srv://rabin747809:SGr3GNf2nKDMICkL@cluster0.9gi5042.mongodb.net/?retryWrites=true&w=majority',
    // ),
    // MongooseModule.forFeature([{ name: Books.name, schema: BookSchema }]),
    BookModule,
    // BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({
//   imports: [
//     MongooseModule.forRoot(
//       'mongodb+srv://rabin747809:SGr3GNf2nKDMICkL@cluster0.9gi5042.mongodb.net/?retryWrites=true&w=majority',
//     ),
//     MongooseModule.forFeature([{ name: 'Books', schema: BooksSchema }]),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
