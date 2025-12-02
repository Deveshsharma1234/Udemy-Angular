import { Component, Input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { UserInputModle } from './user-input/user-imput-model';
import { calculateInvestmentResults } from '../app/Service/investment-results';


@Component({
  selector: 'app-root',
  imports: [Header, UserInput],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  @Input() inputData? : UserInputModle
  calculateInvestmentResults = calculateInvestmentResults(this.inputData)
}
