import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trivia } from '../app/model/trivia';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TriviaService {


  constructor(private http: HttpClient) {
  }

  private triviaUrl = '/rest/trivia';
  private triviaAnswerUrl = '/checkanswer';

  getTriviaJson() {
    return this.http.get(this.triviaUrl);
  }

  createTriviaFromJson(jsonString: any) {
    console.log("In de trivia service: " + JSON.stringify(jsonString));
    const trivia: Trivia = JSON.parse(JSON.stringify(jsonString));

    console.log("Let e: " + trivia);

    return trivia;
  }

  checkAnswer(answer: String) {
    //window.alert("Dit is in de service: " + answer);
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(answer);
    return this.http.post(this.triviaAnswerUrl, body, { 'headers': headers, observe: 'response' });
  }
}

