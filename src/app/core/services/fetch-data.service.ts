import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(
    private db: AngularFirestore,
    private httpClient: HttpClient,
  ) { }

  getOrdersPending() {
    let ref = this.db.collection('delivery');
    return ref.valueChanges();
  }
}
