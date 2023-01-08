package pl.BookRate.bookRate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pl.BookRate.bookRate.repository.BookRepository;
import pl.BookRate.bookRate.model.Book;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    BookRepository bookRepository;
    @GetMapping("/test")
    public int test(){
        return 1;
    }

    @GetMapping("/")
    public List<Book> getAll(){
        return bookRepository.getALL();
    }
    @GetMapping("/{id}")
    public Book getBookById(@PathVariable("id") int id){
        return bookRepository.getBookById(id);
    }

    @PostMapping("/")
    public int add(@RequestBody List<Book> books) {
        return bookRepository.save(books);
    }

    @PutMapping("/{id}")
    public int update(@PathVariable("id") int id, @RequestBody Book updatedBook) {
        Book book = bookRepository.getBookById(id);

        if(book != null) {
            book.setName(updatedBook.getName());
            book.setRating(updatedBook.getRating());

            bookRepository.update(book);

            return 1;
        }else {
            return -1;
        }
    }

    @PatchMapping("/{id}")
    public int partiallyUpdate(@PathVariable("id") int id, @RequestBody Book updatedBook) {
        Book book = bookRepository.getBookById(id);

        if(book != null) {
            if(updatedBook.getName() != null) { book.setName(updatedBook.getName());
            }
            if(updatedBook.getRating() != 0) { book.setRating(updatedBook.getRating());
            }
            bookRepository.update(book);

            return 1;
        }else {
            return -1;
        }
    }

    @DeleteMapping("/{id}")
    public int delete(@PathVariable("id") int id) {
        return bookRepository.delete(id);
    }

}
