export class Book{
    id: number;
    title: string;
    author: string;
    isbn: string;
    publishYear: number;
    reserved: boolean;
  
    constructor(id: number, title: string, author: string, isbn: string, publishYear: number) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.publishYear = publishYear;
      this.reserved = false;
    }
}