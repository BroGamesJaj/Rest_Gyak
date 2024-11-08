import { Injectable,NotFoundException  } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import UpdateBookDto from './dto/update-book.dto';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private nextId = 1;


  create(createBookDto: CreateBookDto) {
    var nBook = new Book(this.nextId, createBookDto.title, createBookDto.author, createBookDto.isbn, createBookDto.publishYear)
    this.nextId++;
    this.books.push(nBook)
    return nBook;
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    if (!this.books.find(book => book.id === id)) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    return this.books.find(book => book.id === id);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    var book = this.findOne(id);
    Object.assign(book, {
      ...book,
      ...updateBookDto
    });
    return book;
  }

  remove(id: number) {
    if (this.books.findIndex(book => book.id === id) === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books.splice(this.books.indexOf(this.books.find(book => book.id === id)),1)
    return "204 No Content";
  }
}
