import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubscription: Subscription;

  constructor(private personsService: PersonsService) {}

  ngOnInit() {
    this.personListSubscription = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
    this.personsService.fetchPersons();
  }

  onPersonClick(person: string) {
    this.personsService.removePerson(person);
  }

  ngOnDestroy() {
    this.personListSubscription.unsubscribe();
  }
}
