import { Component, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit {
  personList: string[];

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personList = this.personsService.persons;
  }
}
