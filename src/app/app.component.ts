import { Component, OnInit } from '@angular/core';
import { TriviaService } from './trivia.service';
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Trivia } from './model/trivia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private triviaService: TriviaService) {
  }

  title = 'OpenTrivia';

  response: any;
  trivia: Trivia;

  async createTrivia() {
    this.response = await this.getTriviaJson();
    //console.log("Na uitvoeren is response: " + this.response);

    this.trivia = this.triviaService.createTriviaFromJson(this.response);

    //console.log("Laat trivia object maar zien: " + this.trivia.answers);
  }

  getTriviaJson() {
    return this.triviaService.getTriviaJson().toPromise();
  }

  sendAnswer(answer: String) {
    //window.alert("Dit is in component: " + answer);
    return this.triviaService.checkAnswer(answer);
  }



  ngOnInit() {
    this.createTrivia();
  }
}
