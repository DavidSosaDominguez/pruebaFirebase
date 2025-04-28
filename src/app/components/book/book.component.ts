import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {Book} from '../../models/book.model';
import {BookService} from '../../services/book.service';


@Component({
  selector: 'app-book',
  imports: [
    FormsModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  book: Book = {name:"",author:"",id:"",genre:"",price:0};

  constructor(private bookService: BookService) {}

  onSubmit(form: NgForm) {
    this.bookService.addBook(form.value).then(()=>form.reset());
  }
}
