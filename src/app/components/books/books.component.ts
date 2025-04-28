import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditBooksComponent} from '../../modal/edit-books/edit-books.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-books',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe((res:Book[])=> {
      console.log("Libros cargados", res);
      this.books = res;
    })
  }

  deleteBook(book: Book) {
    if(confirm("Are you sure you want to delete this book?")){
      this.bookService.deleteBook(book).then(()=>
      console.log('Delete successfull'));
    }
  }

  editModal(book: Book) {
    const modalRef = this.modalService.open(EditBooksComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = book.id;
  }
}
