import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Trivia } from '../model/trivia';



@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent {

  //trivia = Trivia;

  constructor(private triviaService: TriviaService) { }

  ngOnInit(): void {
    //this.triviaService.getTriviaJson;
  }

}
