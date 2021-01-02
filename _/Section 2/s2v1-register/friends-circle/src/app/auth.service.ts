import { Injectable } from '@angular/core';
import { User } from '../entities/User';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private _http : HttpClient) { }

  register(user : User) {
    this._http.post('/api/register', {
      user
    }).subscribe();
  }

}
