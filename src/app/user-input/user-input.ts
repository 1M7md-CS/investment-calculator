import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInputs } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.html',
  styleUrl: './user-input.css',
})
export class UserInput {
  enteredInitialInvestment = signal('');
  enteredAnnualInvestment = signal('');
  enteredExpectedReturn = signal('');
  enteredDuration = signal('');

  calculate = output<InvestmentInputs>();

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration(),
    });
  }
}
