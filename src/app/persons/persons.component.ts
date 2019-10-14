import { Component, Input } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent {
  personList: string[];

  constructor(personsService: PersonsService) {
    this.personList = personsService.persons;
  }
}
