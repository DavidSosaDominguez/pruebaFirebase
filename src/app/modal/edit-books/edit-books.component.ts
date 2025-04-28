import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../models/book.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {BookService} from '../../services/book.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-edit-books',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './edit-books.component.html',
  styleUrl: './edit-books.component.css'
})
export class EditBooksComponent implements OnInit {
  @Input() id!: string;
  book!: Book;

  constructor(public activeModal: NgbActiveModal, private bookService: BookService) {}

  ngOnInit() {
    if(this.id) {
      this.bookService.getBookbyId(this.id).subscribe(res => this.book = res);
    }
  }

  setPrice(book: Book, price: number) {
    this.bookService.modifyBookPrice(this.book, price);
  }

  onUpdate() {
    this.bookService.updateBook(this.book).then(() => {
      this.activeModal.close();
      console.log("Data add successfully.");
    });
  }
}
