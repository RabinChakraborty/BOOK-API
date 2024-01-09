/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from 'src/interface/Books.interface';
import { CreateDto } from './../dto/create.dto';
import { UpdateDto } from 'src/dto/update.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel('Book') private BookModel: Model<Book>) {}

  //add a new book
  async createBook(createDto: CreateDto): Promise<Book> {
    const newBook = await new this.BookModel(createDto);
    return newBook.save();
  }
  //find or show all books
  async getAllBooks(): Promise<Book[]> {
    const BookData = await this.BookModel.find();
    if (!BookData || BookData.length == 0) {
      throw new NotFoundException('Book data not found!');
    }
    return BookData;
  }
  //get a specific Book bi ID
  async getBook(BookId: string): Promise<Book> {
    const existingBook = await this.BookModel.findById(BookId).exec();
    if (!existingBook) {
      throw new NotFoundException(`Book #${BookId} not found`);
    }
    return existingBook;
  }
  //get a book by its title.
  async getBookByTitle(name: string): Promise<Book> {
    const existingBook = await this.BookModel.findOne({ name }).exec();
    if (!existingBook) {
      throw new NotFoundException(`Book with title '${name}' not found`);
    }
    return existingBook;
  }
  //delete a book data
  async deleteBook(BookId: string): Promise<Book> {
    const deletedBook = await this.BookModel.findByIdAndDelete(BookId);
    if (!deletedBook) {
      throw new NotFoundException(`Book #${BookId} not found`);
    }
    return deletedBook;
  }
  //update a book data
  async updateBook(BookId: string, updateBookDto: UpdateDto): Promise<Book> {
    const existingBook = await this.BookModel.findByIdAndUpdate(
      BookId,
      updateBookDto,
      { new: true },
    );
    if (!existingBook) {
      throw new NotFoundException(`Book #${BookId} not found`);
    }
    return existingBook;
  }
}
