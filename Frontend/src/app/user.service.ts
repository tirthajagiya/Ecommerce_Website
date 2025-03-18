import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  apiUrl = "http://localhost:3000/user"

  getAll() {
    return this._http.get(this.apiUrl)
  }

  getByid(id: number) {
    return this._http.get(this.apiUrl + "/" + id)
  }

  delete(id: number) {
    return this._http.delete(this.apiUrl + "/" + id)
  }

  insert(data: any) {
    return this._http.post(this.apiUrl, data)
  }

  update(id: number, data: any) {
    return this._http.put(this.apiUrl + "/" + id, data)
  }
}
