import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { InputBox } from "../shared/input-box/input-box";
import { Button } from "../shared/button/button";
import { FormsModule } from '@angular/forms';
import{calculateInvestmentResults} from "../../investment-results";


@Component({
  selector: 'app-box',
  imports: [InputBox, Button],
  templateUrl: './box.html',
  styleUrl: './box.scss',
})
export class Box {
  initialInvestment = signal<number >(0);
  expectedReturn = signal<number>(0);
  annualInvestment = signal<number>(0);
  duration = signal<number>(0);
  @Output() result = new EventEmitter();

  calculate = ()=> 
  {
    console.log("calculate call");   
    this.result.emit(calculateInvestmentResults(this.initialInvestment(), this.expectedReturn(), this.annualInvestment(), this.duration()));
  }


}
