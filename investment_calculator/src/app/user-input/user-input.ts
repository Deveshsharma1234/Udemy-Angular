import { Component, EventEmitter, Output } from '@angular/core';
import type { UserInputModle } from './user-imput-model';

@Component({
  selector: 'app-user-input',
  imports: [],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {

  initalInvestment = "0";
  AnnualInvestment = "0";
  expectedReturn = "5";
  duration = "1";

  @Output() userInput = new EventEmitter<UserInputModle>();

  onSubmit(){
    this.userInput.emit({
      initalInvestment: Number(this.initalInvestment),
      AnnualInvestment: Number(this.AnnualInvestment),
      expectedReturn: Number(this.expectedReturn),
      duration: Number(this.duration)
    })
  }

}

