import { Model } from 'mongoose';
import { Book } from 'src/interface/Books.interface';
import { CreateDto } from './../dto/create.dto';
import { UpdateDto } from 'src/dto/update.dto';
export declare class BookService {
    private BookModel;
    constructor(BookModel: Model<Book>);
    createBook(createDto: CreateDto): Promise<Book>;
    getAllBooks(): Promise<Book[]>;
    getBook(BookId: string): Promise<Book>;
    getBookByTitle(name: string): Promise<Book>;
    deleteBook(BookId: string): Promise<Book>;
    updateBook(BookId: string, updateBookDto: UpdateDto): Promise<Book>;
}
