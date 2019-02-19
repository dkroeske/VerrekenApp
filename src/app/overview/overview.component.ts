import { Component, OnInit } from '@angular/core';
import {CalculateService} from '../services/calculate.service';
import {Kasboek} from '../models/Kasboek';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private calculatorService: CalculateService) { }

  kasboeken: Kasboek[];

  ngOnInit() {
    this.getOverview()
  }

  getOverview() {
    this.calculatorService.overview().subscribe(
      (data) => this.kasboeken = data
    );
  }

}
