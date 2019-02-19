import {Component, OnInit} from '@angular/core';
// import {Deelnemer} from './models/Deelnemer';
// import {VerrekenCalculator} from './logic/VerrekenCalculator';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {Kasboek} from './models/Kasboek';
// import {CalculateService} from './services/calculate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { //implements { // OnInit {

  // deelnemerForm: FormGroup;
  // deelnemers: Deelnemer[] = [];
  // kasboek: Kasboek = null;
  //
  // constructor(private calculatorService: CalculateService){ }
  //
  // ngOnInit() {
  //   //
  //   this.deelnemers = []
  //
  //   this.deelnemerForm = new FormGroup({
  //       'naam': new FormControl(null, [Validators.required, this.valideName.bind(this)]),
  //       'inleg': new FormControl(null, [Validators.required, this.valideInleg.bind(this)]),
  //     });
  // }
  //
  // onSubmit() {
  //   const naam: string = this.deelnemerForm.value['naam'];
  //   const inleg: number = parseFloat(this.deelnemerForm.value['inleg']);
  //
  //   const deelnemer = new Deelnemer(naam, inleg);
  //   this.deelnemers.push(deelnemer);
  //
  //   this.calculatorService.calculate(this.deelnemers, 'Avondje Bios')
  //     .subscribe( (kasboek) => {
  //       this.kasboek = kasboek;
  //     });
  //
  //   //this.kasboek = new VerrekenCalculator().verreken(this.deelnemers);
  // }
  //
  // onClearDeelnemers() {
  //   this.deelnemers = [];
  //   this.kasboek = null;
  // }
  //
  // valideName(control: FormControl): {[s: string]: boolean} {
  //   const username = control.value;
  //   const regexp = new RegExp('^[a-zA-Z]([a-zA-Z0-9]){2,14}');
  //   const test = regexp.test(username);
  //   if (regexp.test(username) !== true) {
  //     return {username: false};
  //   } else {
  //     return null;
  //   }
  // }
  //
  // valideInleg(control: FormControl): {[s: string]: boolean} {
  //   const password = control.value;
  //   const regexp = new RegExp('^(0|(([1-9]{1}|[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{2}){1}(\[0-9]{3}){0,}))[\.](([0-9]{2}))$');
  //   const test = regexp.test(password);
  //   if (regexp.test(password) !== true) {
  //     return {username: false};
  //   } else {
  //     return null;
  //   }
  // }
}
