import {  Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import { ProfileService } from './profile.service';
import { Profile } from './profile.model';


@Component({
  selector: 'mt-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  profile: Profile
  

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.profileService.profileById(this.route.snapshot.params['id'])
      .subscribe(profile => this.profile = profile)
  }

}
