import { Component, OnInit } from '@angular/core';
import { Escort } from './escort/esport.model';
import { EscortsService } from './escorts.service';

@Component({
  selector: 'mt-escorts',
  templateUrl: './escorts.component.html'
})
export class EscortsComponent implements OnInit {

  escorts: Escort[] = [];

  constructor(private escortsService: EscortsService) { }

  ngOnInit() {
    this.escortsService.escorts()
    .subscribe(escorts=> this.escorts = escorts)
  }

}
