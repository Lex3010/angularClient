import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trivia } from '../app/model/trivia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TriviaService {

  constructor(private http: HttpClient) {
  }

  private triviaUrl: 'http://localhost:8080/trivia/';

  getTrivia() {
    return this.http.get(this.triviaUrl);
  }
}
