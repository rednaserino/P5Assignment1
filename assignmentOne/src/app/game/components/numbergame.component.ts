import { Component, OnInit } from '@angular/core';
import {CounterService} from '../services/counter.service'

@Component({
  selector: 'app-numbergame',
  templateUrl: './numbergame.component.html',
  styleUrls: ['./numbergame.component.scss']
})
export class NumbergameComponent implements OnInit {
  guess: number = null;
  amountOfGuesses: number = 0;
  previousGuess: number;
  previousGuessCorrect: boolean;
  previousGuessHigher: boolean;
  hiddenNumber: number;

  get makeGuessDisabled(){
    return this.guess === null || this.guess < 1 || this.guess > 100
  }  
    
  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.generateHiddenNumber();
  }

  makeGuess(){
    if(this.makeGuessDisabled){
      return
    }
    if(this.amountOfGuesses === 0){
      this.counterService.start();
    }

    this.previousGuess = this.guess;
    this.amountOfGuesses++;
    this.guess = null;
 
    if(this.previousGuess > this.hiddenNumber){
      this.previousGuessHigher = false;
    }
    else if(this.previousGuess < this.hiddenNumber){
      this.previousGuessHigher = true;
    }
    else if (this.previousGuess === this.hiddenNumber){
      this.previousGuessCorrect = true;
      this.resetGame();
    }
  }

  resetGame(){
    this.amountOfGuesses = 0;
    this.counterService.stop();
  }

  generateHiddenNumber(){
    this.hiddenNumber = 36;
  }
}
