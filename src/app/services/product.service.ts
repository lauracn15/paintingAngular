import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../../../src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  search(data) {
    return this._http.get(`${APIURL}/${data}`);
  }  
  private getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token_token')}`);
  }
  createPurchaseToken(purchase: FormData) {
    var post = this._http.post(`${APIURL}/Purchase/CreateCharge`, purchase, { headers: this.getHeaders()});
    
    return post;
  }

}
