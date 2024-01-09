"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_dto_1 = require("../dto/create.dto");
const update_dto_1 = require("../dto/update.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async createBook(response, createBookDto) {
        try {
            const newBook = await this.bookService.createBook(createBookDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                message: 'Book has been created successfully',
                newBook,
            });
        }
        catch (err) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Book not created!',
                error: 'Bad Request',
            });
        }
    }
    async getBooks(response) {
        try {
            const bookData = await this.bookService.getAllBooks();
            return response.status(common_1.HttpStatus.OK).json({
                message: 'All Books data found successfully',
                bookData,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async updateBook(response, bookId, updateBookDto) {
        try {
            const existingBook = await this.bookService.updateBook(bookId, updateBookDto);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Book has been successfully updated',
                existingBook,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async getBook(response, bookId) {
        try {
            const existingBook = await this.bookService.getBook(bookId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Book found successfully',
                existingBook,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    async deleteBook(response, bookId) {
        try {
            const deletedBook = await this.bookService.deleteBook(bookId);
            return response.status(common_1.HttpStatus.OK).json({
                message: 'Book Deleted Successfully',
                deletedBook,
            });
        }
        catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_dto_1.CreateDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBooks", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_dto_1.UpdateDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getBook", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
BookController = __decorate([
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [books_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=books.controller.js.map