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

  getTriviaJson() {
    return this.http.get(this.triviaUrl);
  }

  createTriviaFromJson(jsonString: any) {
    console.log("In de trivia service: " + JSON.stringify(jsonString));
    const trivia: Trivia = JSON.parse(JSON.stringify(jsonString));

    console.log("Let e: " + trivia);

    return trivia;
    // window.alert("Aanmaken");
    //window.alert(this.triviaUrl);
    //console.log(jsonString);
    // const json = JSON.parse(jsonString);
    //let triviaInstance = plainToClass(Trivia, json);
    // return triviaInstance;
  }
}

