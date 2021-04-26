import { Component, OnInit } from '@angular/core';


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

  escorts: Escort[] = []


  constructor(private escortsService: EscortsService) { }

  ngOnInit() {

        this.escortsService.escorts()
      .subscribe(escorts => this.escorts = escorts)
  }

}
