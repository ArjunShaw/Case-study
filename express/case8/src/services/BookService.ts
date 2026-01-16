import { IBookRepository } from '../repositaries/interfaces/IBookRepository';  
import { Book } from '../models/book';  

export class BookService {
  constructor(private bookRepository: IBookRepository) {}

  async borrowBook(bookId: string): Promise<Book> {
    const book = await this.bookRepository.findById(bookId);

    if (!book) throw new Error('Book not found');
    if (book.isBorrowed) throw new Error('Book already borrowed');

    const updatedBook: Book = {
      ...book,
      isBorrowed: true,
    };

    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }

  async addBook(book: Book): Promise<void> {
    const newBook: Book = {
      id: book.id,
      title: book.title,
      author: book.author,
      isBorrowed: false,
    };

    await this.bookRepository.save(newBook);
  }

  async allBook(): Promise<Book[]> {
    return await this.bookRepository.findAll();
  }

  async returnBook(bookId: string): Promise<Book> {
    const book = await this.bookRepository.findById(bookId);

    if (!book) throw new Error('Book not found');
    if (!book.isBorrowed) throw new Error('Book is not borrowed');

    const updatedBook: Book = {
      ...book,
      isBorrowed: false,
    };

    await this.bookRepository.save(updatedBook);
    return updatedBook;
  }
}