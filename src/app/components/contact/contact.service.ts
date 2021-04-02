
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IContact } from "./contact.component";

@Injectable({
    providedIn: 'root'
})
export class ContactServices {
    constructor(private http: HttpClient ){}
    postData(payload: IContact){
        const url='http://wQuran.azee.tech/sendemail';
        return this.http.post<any>(url, payload, this.httpOptions);
    }
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
}