import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { BookService } from './books.service';
import { CreateDto } from 'src/dto/create.dto';
import { UpdateDto } from 'src/dto/update.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook(@Res() response, @Body() createBookDto: CreateDto) {
    try {
      const newBook = await this.bookService.createBook(createBookDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Book has been created successfully',
        newBook,
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Book not created!',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getBooks(@Res() response) {
    try {
      const bookData = await this.bookService.getAllBooks();
      return response.status(HttpStatus.OK).json({
        message: 'All Books data found successfully',
        bookData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateBook(
    @Res() response,
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateDto,
  ) {
    try {
      const existingBook = await this.bookService.updateBook(
        bookId,
        updateBookDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Book has been successfully updated',
        existingBook,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getBook(@Res() response, @Param('id') bookId: string) {
    try {
      const existingBook = await this.bookService.getBook(bookId);
      return response.status(HttpStatus.OK).json({
        message: 'Book found successfully',
        existingBook,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteBook(@Res() response, @Param('id') bookId: string) {
    try {
      const deletedBook = await this.bookService.deleteBook(bookId);
      return response.status(HttpStatus.OK).json({
        message: 'Book Deleted Successfully',
        deletedBook,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}

// @Controller()
// export class BookController {
//   BookService: any;
//   constructor(private readonly bookService: BookService) {}
//   //post
//   @Post('/add')
//   async createBook(@Res() response, @Body() createBookDto: CreateDto) {
//     try {
//       const newBook = await this.BookService.createBook(createBookDto);
//       return response.status(HttpStatus.CREATED).json({
//         message: 'Book has been created successfully',
//         newBook,
//       });
//     } catch (err) {
//       return response.status(HttpStatus.BAD_REQUEST).json({
//         statusCode: 400,
//         message: 'Error: Book not created!',
//         error: 'Bad Request',
//       });
//     }
//   }
//   //get
//   @Get('/All')
//   async getBooks(@Res() response) {
//     try {
//       const BookData = await this.BookService.getAllBooks();
//       return response.status(HttpStatus.OK).json({
//         message: 'All Books data found successfully',
//         BookData,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
//   //get by id to update its data
//   @Put('/:id')
//   async updateBook(
//     @Res() response,
//     @Param('id') BookId: string,
//     @Body() updateBookDto: UpdateDto,
//   ) {
//     try {
//       const existingBook = await this.BookService.updateBook(
//         BookId,
//         updateBookDto,
//       );
//       return response.status(HttpStatus.OK).json({
//         message: 'Book has been successfully updated',
//         existingBook,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
//   //get by id
//   @Get('/:id')
//   async getBook(@Res() response, @Param('id') BookId: string) {
//     try {
//       const existingBook = await this.BookService.getBook(BookId);
//       return response.status(HttpStatus.OK).json({
//         message: 'Book found successfully',
//         existingBook,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
//   //delete
//   @Delete('/:id')
//   async deleteBook(@Res() response, @Param('id') BookId: string) {
//     try {
//       const deletedBook = await this.BookService.deleteBook(BookId);

//       return response.status(HttpStatus.OK).json({
//         message: 'Book Deleted Successfully',
//         deletedBook,
//       });
//     } catch (err) {
//       return response.status(err.status).json(err.response);
//     }
//   }
// }
