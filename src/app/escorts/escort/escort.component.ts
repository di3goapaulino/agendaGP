import {  Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'; 

import { Escort } from './esport.model';

@Component({
  selector: 'mt-escort',
  templateUrl: './escort.component.html'
})
export class EscortComponent implements OnInit {

  @Input() escort: Escort

  constructor() { }

  ngOnInit() {
  }

}
