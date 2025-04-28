import { Component } from '@angular/core';
import {BookComponent} from '../book/book.component';
import {BooksComponent} from '../books/books.component';

@Component({
  selector: 'app-home',
  imports: [
    BookComponent,
    BooksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
