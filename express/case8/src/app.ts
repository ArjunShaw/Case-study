import express from 'express';  
import { BookController } from './controllers/BookController';  
import { BookService } from './services/BookService';  
import { InMemoryBookRepository } from './repositaries/InMemoryBookRepository';  

const app = express();  
app.use(express.json());  

// Initialize components  
const bookRepository = new InMemoryBookRepository();  
const bookService = new BookService(bookRepository);  
const bookController = new BookController(bookService);  

// Routes  
 
app.post('/books/:id/borrow', (req, res) =>
  bookController.borrowBook(req, res)
);

app.post('/books/:id/return', (req, res) =>
  bookController.returnBook(req, res)
);
app.get('/', (req, res) =>
  bookController.allBook(req, res)
);

app.post('/book', (req, res) =>
  bookController.addBook(req, res)
);





const port = 3000;  
app.listen(port, () => {  
  console.log(`Library system running on port ${port}`);  
});  