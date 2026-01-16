import { Request, Response } from 'express';  
import { BookService } from '../services/BookService';  

export class BookController {  
  constructor(private bookService: BookService) {}  

  async borrowBook(req: Request, res: Response): Promise<void> {  
    try {  
      const book = await this.bookService.borrowBook(req.params.id as string);  
      res.json(book);  
    } catch (error: any) {  
      res.status(400).json({ error: error.message });  
    }  
  }  

   // Add Book
  async addBook(req: Request, res: Response): Promise<void> {
    try {
      const { id, title, author } = req.body;

      await this.bookService.addBook({
        id,
        title,
        author,
        isBorrowed: false,
      });

      res.status(201).json({
        status: true,
        message: 'Book added successfully',
      });
    } catch (error: any) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  // Get All Books
  async allBook(req: Request, res: Response): Promise<void> {
    try {
      const books = await this.bookService.allBook();
      res.status(200).json({
        status: true,
        data: books,
      });
    } catch (error: any) {
      res.status(500).json({
        status: false,
        message: error.message,
      });
    }
  }

  async returnBook(req: Request, res: Response): Promise<void> {
    try {
      const book = await this.bookService.returnBook(req.params.id as string);
      res.json(book);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}  