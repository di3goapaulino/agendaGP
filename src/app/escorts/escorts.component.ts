import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'


import { Escort } from './escort/esport.model';
import { EscortsService } from './escorts.service';

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-escorts',
  templateUrl: './escorts.component.html'
})
export class EscortsComponent implements OnInit {

  searchBarState = 'hidden'
  escorts: Escort[] = []

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private escortsService: EscortsService
    , private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchTerm =>
          this.escortsService
            .escorts(searchTerm)
            .catch(error => Observable.from([])))
        .subscribe(escorts => this.escorts = escorts)

    this.escortsService.escorts()
      .subscribe(escorts => this.escorts = escorts)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
