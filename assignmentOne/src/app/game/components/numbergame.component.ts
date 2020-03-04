import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbergame',
  templateUrl: './numbergame.component.html',
  styleUrls: ['./numbergame.component.scss']
})
export class NumbergameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guess: number = 0;
  amountOfGuesses: number = 0;
  previousGuess: number;
  previousGuessCorrect: boolean;
  previousGuessHigher: boolean;
  hiddenNumber = 36;

  makeGuess(){
    this.previousGuess = this.guess;
    this.amountOfGuesses++;
    this.guess = 0;

    if(this.previousGuess > this.hiddenNumber){
      this.previousGuessHigher = false;
    }
    else if(this.previousGuess < this.hiddenNumber){
      this.previousGuessHigher = true;
    }
    else if (this.previousGuess === this.hiddenNumber){
      this.previousGuessCorrect = true;
    }
  }
}
