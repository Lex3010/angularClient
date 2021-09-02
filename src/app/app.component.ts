import { Component, OnInit } from '@angular/core';
import { TriviaService } from './trivia.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private triviaService: TriviaService) {
  }

  title = 'OpenTrivia';

  trivia: any;

  getTrivia() {
    this.triviaService.getTrivia().subscribe((repsonse) => {
      this.trivia = this.trivia;
      console.log(this.trivia);
    });
  }


  ngOnInit() {
    this.getTrivia();
  }
}
