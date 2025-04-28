import { Injectable } from '@angular/core';
import {Firestore, addDoc, collection, collectionData, deleteDoc, doc, docData, setDoc, updateDoc} from '@angular/fire/firestore';
import {Book} from '../models/book.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private firestore: Firestore) {}

  addBook(book: Book) {
    const booksRef = collection(this.firestore, 'books');
    return addDoc(booksRef, book);
  }

  getBooks(): Observable<Book[]> {
    const bookRef = collection(this.firestore, 'books');
    return collectionData(bookRef, {idField: 'id'}) as Observable<Book[]>;
  }

  deleteBook(book: Book) {
    const bookDocRef = doc(this.firestore, `books/${book.id}`);
    return deleteDoc(bookDocRef);
  }

  getBookbyId(id: string) {
    const bookRef = doc(this.firestore, `books/${id}`);
    return docData(bookRef, {idField: 'id'}) as Observable<Book>;
  }

  updateBook(book: Book) {
    const bookRef = doc(this.firestore, `books/${book.id}`);
    return setDoc(bookRef, book);
  }

  modifyBookPrice(book: Book, price: number) {
    const bookRef = doc(this.firestore, `books/${book.id}`);
    return updateDoc(bookRef, {price: price});
  }
}
