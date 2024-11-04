import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';

export default class UpdateBookDto extends PartialType(CreateBookDto) {
    title: string;
    author: string;
    isbn: string;
    publishYear: number;
    reserved: boolean;
}
