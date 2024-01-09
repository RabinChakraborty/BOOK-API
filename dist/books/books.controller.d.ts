import { BookService } from './books.service';
import { CreateDto } from 'src/dto/create.dto';
import { UpdateDto } from 'src/dto/update.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(response: any, createBookDto: CreateDto): Promise<any>;
    getBooks(response: any): Promise<any>;
    updateBook(response: any, bookId: string, updateBookDto: UpdateDto): Promise<any>;
    getBook(response: any, bookId: string): Promise<any>;
    deleteBook(response: any, bookId: string): Promise<any>;
}
