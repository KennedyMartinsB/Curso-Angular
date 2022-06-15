import { Injectable } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, retry, tap, throwError } from 'rxjs';
import { Stock } from '../models/stock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private readonly path = "../../assets/data/stocks.json";
  Stock: Stock;
  // promise?: Observable<Stock[]>;


  constructor(private http: HttpClient) { }

  async getStocks(){
    return this.http.get(this.path).toPromise();
  }

  orderByPrice(ActivePrice: number): Observable<Stock>{
    const pricePath = this.http.get<Stock>(this.path);
    return pricePath;
  }

  // getStocks(): Observable<any>{
  //   return this.http.get<any[]>(this.path);
  // }

  // private handleError<T>(operation = 'operation', result?: T){
  //   return (error: any): Observable<T> => {
  //     console.log(`failed: ${error.message}`);
  //     return of (result as T)
  //   }
  // }

  // get sortByLastModifiedAsend() {
  //   return this.arrayJson.sort((a: any, b: any) => {
  //     return <any>new Date(b.lastModified) - <any>new Date(a.lastModified);
  //   });
  // }


}
